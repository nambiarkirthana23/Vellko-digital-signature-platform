import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { LoginDto } from 'src/users/dto/signin.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body() dto: LoginDto) {
    return this.authService.signIn(dto.email, dto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    return req.user;
  }
}