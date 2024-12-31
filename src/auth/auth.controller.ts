import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

import { SignUpAdminDto, SignUpUserDto } from './dtos/signup.dto';
import { SignInUserDto } from './dtos/signin.dto';
import { UserEntity } from 'src/entities/user.entity';
import { AdminEntity } from 'src/entities/admin.entity';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup/admin')
  @ApiResponse({ type: AdminEntity })
  async signUpAdmin(@Body() user: SignUpAdminDto) {
    return new AdminEntity(await this.authService.signUpAdmin(user));
  }

  @ApiResponse({ type: AdminEntity })
  @Post('/signin/admin')
  async signInAdmin(@Body() user: SignInUserDto) {
    return this.authService.signInAdmin(user);
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
