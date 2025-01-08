import { Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import UserGuard from 'src/auth/guard/user.guard';
import { UserEntity } from 'src/entities/user.entity';

@Controller('/users/')
@ApiBearerAuth()
@UseGuards(UserGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserEntity[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param() id: number) {
    return this.userService.getUser(id);
  }

  @Put(':id')
  async updateUser(data) {
    return this.userService.updateUser(data);
  }
}
