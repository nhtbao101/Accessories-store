import { Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from './user.service';
import AdminGuard from 'src/auth/guard/admin.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/constants/role';
import { RolesGuard } from 'src/auth/guard/roles.admin.guard';
import { UserEntity } from 'src/entities/user.entity';

@Controller('/manage/users/')
@ApiBearerAuth()
@UseGuards(AdminGuard, RolesGuard)
@Roles(Role.SUPER_ADMIN, Role.ADMIN)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsersByAdmin() {
    return await this.userService.getUsersByAdmin();
  }

  @Get(':id')
  async getUserByAdmin(email: string) {
    return await this.userService.getUserByAdmin(email);
  }

  @Put(':id')
  async updateUserByAdmin(data: UserEntity) {
    return await this.userService.updateUserByAdmin(data);
  }
}
