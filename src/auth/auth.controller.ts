import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  signIn(@Body() signInDto: Record<string, any>) {
    console.log('signInDto', signInDto);
    return this.authService.signIn(signInDto.name, signInDto.pass);
  }
}
