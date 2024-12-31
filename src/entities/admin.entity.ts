import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class AdminEntity {
  constructor(partial: Partial<AdminEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty()
  avatar?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  roleId: number;
}
