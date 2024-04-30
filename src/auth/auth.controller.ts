import { Controller, Post, Body, HttpCode, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateDto, AuthDto, UpdateAuthDto } from './dto';
import { JwtGuard } from './guard/jwt.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(201)
  @UseGuards(JwtGuard)
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
