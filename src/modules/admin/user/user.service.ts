import { Injectable } from '@nestjs/common';
import { SignUpUserDto } from 'src/auth/dtos/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsersByAdmin() {
    return await this.prisma.user.findMany();
  }

  async getUserByAdmin(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async updateUserByAdmin(data: SignUpUserDto) {
    return await this.prisma.user.update({
      where: {
        email: data.email,
      },
      data: data,
    });
  }
}
