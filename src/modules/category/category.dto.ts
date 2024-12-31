import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Category name' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Category description' })
  description: string;
}
