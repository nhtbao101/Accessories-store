import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateAdminDto, SignUpUserDto } from './dtos/signup.dto';
import { SignInUserDto } from './dtos/signin.dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/admin')
  async createAdmin(@Body() user: CreateAdminDto) {
    return this.authService.createAdmin(user);
  }

  @Post('/signup/user')
  async signUpUser(@Body() user: SignUpUserDto) {
    return this.authService.signUpUser(user);
  }

  @Post('/signin/user')
  async signInUser(@Body() user: SignInUserDto) {
    return this.authService.signInUser(user);
  }
}
