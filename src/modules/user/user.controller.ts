import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:id')
  async getUser(email: string) {
    return this.userService.getUser(email);
  }

  @Post('/:id/update')
  async updateUser(data) {
    return this.userService.updateUser(data);
  }
}
