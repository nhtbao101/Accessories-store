import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { SignUpUserDto } from 'src/auth/dtos/signup.dto';
import { UserEntity } from 'src/entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<UserEntity[]> {
    const user = await this.prisma.user.findMany();
    return plainToInstance(UserEntity, user);
  }

  async getUser(id: number): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return plainToInstance(UserEntity, user);
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
