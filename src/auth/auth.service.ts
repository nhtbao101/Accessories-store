import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpAdminDto, SignUpUserDto } from './dtos/signup.dto';
import { SignInUserDto } from './dtos/signin.dto';

import HTTP_STATUS from 'src/constants/http-code';
import { UserEntity } from 'src/entities/user.entity';
import { ERROR_MESSAGE } from 'src/constants/error-message';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUpAdmin(req: SignUpAdminDto) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.password, salt);
    const user = await this.prisma.admin.findUnique({
      where: {
        email: req.email,
      },
    });
    if (user) {
      throw new HttpException(
        ERROR_MESSAGE.EMAIL_EXIST,
        HTTP_STATUS.BAD_REQUEST,
      );
    }
    return await this.prisma.admin.create({
      data: {
        ...req,
        password: hashPassword,
      },
    });
  }

  async signInAdmin(req: SignInUserDto) {
    const user = await this.prisma.admin.findUnique({
      where: {
        email: req.email,
      },
    });
    if (!user) {
      throw new HttpException(
        ERROR_MESSAGE.AUTHENTICATION,
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatchPassword = await bcrypt.compare(req.password, user.password);

    if (!isMatchPassword) {
      throw new HttpException(
        ERROR_MESSAGE.AUTHENTICATION,
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      accessToken: await this.jwtService.sign({ req }),
    };
  }

  async signUpUser(req: SignUpUserDto) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.password, salt);
    const user = await this.prisma.user.findUnique({
      where: { email: req.email },
    });

    if (user) {
      throw new HttpException(
        ERROR_MESSAGE.EMAIL_EXIST,
        HTTP_STATUS.BAD_REQUEST,
      );
    }

    return await this.prisma.user.create({
      data: {
        ...req,
        password: hashPassword,
      },
    });
  }

  @HttpCode(HttpStatus.OK)
  async signInUser(req: SignInUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: req.email },
    });

    if (!user) {
      throw new HttpException(
        ERROR_MESSAGE.AUTHENTICATION,
        HTTP_STATUS.BAD_REQUEST,
      );
    }
    const isValidPassword = await bcrypt.compare(req.password, user.password);
    if (!user || !isValidPassword) {
      throw new HttpException(
        ERROR_MESSAGE.AUTHENTICATION,
        HTTP_STATUS.BAD_REQUEST,
      );
    }

    return {
      user: new UserEntity(user),
      accessToken: await this.jwtService.signAsync({
        email: req.email,
        password: req.password,
      }),
    };
  }
}
