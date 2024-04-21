import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService
  ) {}

  async findAll() {
    const users =  await this.prisma.user.findMany();

    (users).forEach(user => delete user.password);

    return users;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });

    delete user.password;

    return user;
  }

  async update(
    id: string, 
    dto: UpdateUserDto
  ) {
    const updateUser = await this.prisma.user.update({
      where: {
        id
      },
      data: {
        ...dto
      }
    })

    return updateUser;
  }

  async remove(id: string) {
    const deleteUser = await this.prisma.user.delete({
      where: {
        id
      }
    });

    return 'User deleted successfully';
  }
}
