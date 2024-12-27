import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpUserDto } from './dtos/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { error } from 'console';
import { SignInUserDto } from './dtos/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async createAdmin(user) {
    return await this.prisma.admin.create({
      data: user,
    });
  }

  async signUpUser(user: SignUpUserDto) {
    return await this.prisma.users.create({
      data: user,
    });
  }

  async signInUser(user: SignInUserDto) {
    const userLogin = await this.prisma.users.findUnique({
      where: { email: user.email },
    });

    console.log('userLogin', user, userLogin);

    if (!userLogin) {
      throw error('User not found');
    }

    if (user.password !== userLogin.password) {
      throw error('Password invalid');
    }

    return {
      accessToken: await this.jwtService.signAsync({
        email: user.email,
        password: user.password,
      }),
    };
  }
}
