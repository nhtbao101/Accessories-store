import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import UserGuard from 'src/auth/guard/user.guard';

@Controller('/users')
@ApiBearerAuth()
@UseGuards(UserGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:id')
  async getUser(@Req() req) {
    return this.userService.getUser(req.user.email);
  }

  @Post('/:id/update')
  async updateUser(data) {
    return this.userService.updateUser(data);
  }
}
