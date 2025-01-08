import { Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AdminService } from './admin.service';
import AdminGuard from 'src/auth/guard/admin.guard';
import { AdminEntity } from 'src/entities/admin.entity';
import { Role } from 'src/constants/role';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.admin.guard';

@Controller('/admin/')
@UseGuards(AdminGuard, RolesGuard)
@ApiBearerAuth()
@Roles(Role.SUPER_ADMIN, Role.ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async getAdmins(): Promise<AdminEntity[]> {
    const adminList = await this.adminService.getAdmins();
    return adminList.map((admin: AdminEntity) => new AdminEntity(admin));
  }

  @Get(':id')
  async getAdminByEmail(@Req() req) {
    return new AdminEntity(
      await this.adminService.getAdminById(req.user.email),
    );
  }

  @Put(':id')
  async updateAdmin(data) {
    return await this.adminService.update(data);
  }
}
