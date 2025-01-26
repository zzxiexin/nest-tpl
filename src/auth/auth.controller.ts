import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  signIn(@Body() userInfo: Record<string, any>) {
    return this.authService.signIn(userInfo.name, userInfo.pass);
  }
}
