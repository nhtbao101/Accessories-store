import { Injectable } from '@nestjs/common';
import { SignUpAdminDto } from 'src/auth/dtos/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async getAdmins() {
    return await this.prisma.admin.findMany();
  }

  async getAdminById(email: string) {
    return await this.prisma.admin.findUnique({
      where: {
        email: email,
      },
    });
  }

  async update(data: SignUpAdminDto) {
    return await this.prisma.admin.update({
      where: {
        email: data.email,
      },
      data: data,
    });
  }
}
