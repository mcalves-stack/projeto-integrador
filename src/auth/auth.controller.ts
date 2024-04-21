import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateDto, AuthDto, UpdateAuthDto } from './dto';
import { JwtGuard } from './guard/jwt.guard';
import { CurrentUser } from './decorator/current-user-decorator';
import { UserPayload } from './strategy/jwt.stategy';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtGuard)
  @HttpCode(201)
  @Post('signup')
  signup(
    @Body() dto: CreateDto,
  ) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
