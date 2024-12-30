import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpUserDto } from './dtos/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { SignInUserDto } from './dtos/signin.dto';

import * as bcrypt from 'bcrypt';
import HTTP_STATUS from 'src/constants/http-code';

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

  async signUpUser(userSignup: SignUpUserDto) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(userSignup.password, salt);
    const user = await this.prisma.users.findUnique({
      where: { email: userSignup.email },
    });

    if (user) {
      throw new HttpException(
        'Email already exist, please use another email',
        HTTP_STATUS.BAD_REQUEST,
      );
    }

    return await this.prisma.users.create({
      data: {
        ...userSignup,
        password: hashPassword,
      },
    });
  }

  @HttpCode(HttpStatus.OK)
  async signInUser(req: SignInUserDto) {
    const user = await this.prisma.users.findUnique({
      where: { email: req.email },
    });

    if (!user) {
      throw new HttpException(
        'Email or password is incorrect',
        HTTP_STATUS.BAD_REQUEST,
      );
    }
    const isValidPassword = await bcrypt.compare(req.password, user.password);
    if (!user || !isValidPassword) {
      throw new HttpException(
        'Email or password is incorrect',
        HTTP_STATUS.BAD_REQUEST,
      );
    }

    return {
      accessToken: await this.jwtService.signAsync({
        email: req.email,
        password: req.password,
      }),
    };
  }
}
