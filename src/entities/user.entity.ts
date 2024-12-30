import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty({ name: 'phone_number' })
  phoneNumber: string;

  @ApiProperty()
  address?: string;

  @ApiProperty({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty({ name: 'user_role' })
  userRole: number;

  @ApiProperty()
  orders: any;
}
