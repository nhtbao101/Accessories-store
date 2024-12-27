import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class SignUpUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsPhoneNumber()
  @IsString()
  @ApiProperty({ name: 'phone_number' })
  phoneNumber: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  address?: string;
}

export class CreateAdminDto {
  @IsEmail()
  @ApiProperty({ name: 'email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  // @ApiProperty({ name: 'password' })
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ name: 'full_name' })
  fullName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ name: 'avatar' })
  avatar: string;

  @IsNotEmpty()
  @ApiProperty({ name: 'role_id' })
  roleId: number;
}
