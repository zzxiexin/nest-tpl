import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    console.log('username', username);
    const user = await this.usersService.findByName(username);
    if (user?.pass !== pass) {
      throw new UnauthorizedException();
    }
    const { pass: password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}