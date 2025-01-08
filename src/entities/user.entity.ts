import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  email: string;

  @Exclude({ toPlainOnly: true })
  password: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  userRole: number;

  @ApiProperty()
  orders?: any;

  @ApiProperty()
  accessToken?: string;
}
