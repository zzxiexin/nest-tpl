import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(AuthGuard)
  @Post()
  createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Get()
  getAllUser() {
    return this.usersService.getAllUser();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    console.log('id params', id);
    return this.usersService.findById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
