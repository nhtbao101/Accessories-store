import { Injectable } from '@nestjs/common';
import { SignUpUserDto } from 'src/auth/dtos/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    console.log('prisma get user');
    return this.prisma.user.findMany();
  }

  async getUser(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async updateUser(data: SignUpUserDto) {
    return this.prisma.user.update({
      where: {
        email: data.email,
      },
      data: data,
    });
  }
}
