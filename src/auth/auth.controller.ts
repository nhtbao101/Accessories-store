import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

import { CreateAdminDto, SignUpUserDto } from './dtos/signup.dto';
import { SignInUserDto } from './dtos/signin.dto';
import { UserEntity } from 'src/entities/user.entity';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/admin')
  async createAdmin(@Body() user: CreateAdminDto) {
    return this.authService.createAdmin(user);
  }

  @Post('/signup/user')
  @ApiCreatedResponse({ type: UserEntity })
  async signUpUser(@Body() user: SignUpUserDto) {
    return new UserEntity(await this.authService.signUpUser(user));
  }

  @Post('/signin/user')
  async signInUser(@Body() user: SignInUserDto) {
    return this.authService.signInUser(user);
  }
}
