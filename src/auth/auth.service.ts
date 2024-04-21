import { PrismaService } from './../prisma/prisma.service';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateDto, AuthDto } from './dto';
import { compare, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  // cadastrar
  async signup(dto: CreateDto) {
    // verificar e-mail
    const userWithSameEmail = await this.prisma.user.findUnique({
      where: { email: dto.email }
    })

    if(userWithSameEmail) {
      throw new ConflictException('User with the same email already exists');
    }

    // gerar senha hash
    const hashPassword = await hash(dto.password, 8);
    
    // criar usuário
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        lastname: dto.lastname,
        phone: dto.phone,
        email: dto.email,
        password: hashPassword
      }
    })

    return user;
  }

  // login
  async signin(dto: AuthDto) {
    // verificar e-mail
    const user = await this.prisma.user.findUnique({
      where: { 
        email: dto.email,
      }
    })

    if(!user) {
      throw new UnauthorizedException('User credentials do not match.');
    }

    // verificar senha
    const passwordMatch = await compare(dto.password, user.password);

    if(!passwordMatch) {
      throw new UnauthorizedException('User credentials do not match.');
    }

    return this.signToken(user.id, user.email);
  }

  async signToken(
    id: string, 
    email: string, 
    ) {
    const accessToken = this.jwt.sign({ 
      sub: id,
      email,
    })

    return {
      access_token: accessToken,
    }
  }
}
