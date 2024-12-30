import { ApiProperty } from '@nestjs/swagger';
import { Transform, Expose } from 'class-transformer';
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
  @ApiProperty({ example: 'email@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Abcd1234' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'MegaTron' })
  name: string;

  @Transform(({ value, obj }) => obj.phone_number || value)
  @IsPhoneNumber('VN')
  @IsString()
  @Expose({ name: 'phone_number' })
  @ApiProperty({ name: 'phone_number', example: '84912345678' })
  phoneNumber: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '23 An Nhon 11, Da Nang' })
  address?: string;
}

export class CreateAdminDto {
  @IsEmail()
  @ApiProperty({ name: 'email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
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
