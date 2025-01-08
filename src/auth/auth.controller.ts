import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
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
  async signUpAdmin(@Body() user: SignUpAdminDto): Promise<AdminEntity> {
    return await this.authService.signUpAdmin(user);
  }

  @ApiResponse({ type: AdminEntity })
  @Post('/signin/admin')
  async signInAdmin(@Body() user: SignInUserDto) {
    return this.authService.signInAdmin(user);
  }

  @Post('/signup/user')
  @ApiResponse({ type: UserEntity })
  async signUpUser(@Body() user: SignUpUserDto): Promise<UserEntity> {
    return await this.authService.signUpUser(user);
  }

  @Post('/signin/user')
  @ApiResponse({ type: UserEntity })
  async signInUser(@Body() user: SignInUserDto) {
    return this.authService.signInUser(user);
  }
}
