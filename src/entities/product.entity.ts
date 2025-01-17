import { ApiProperty } from '@nestjs/swagger';
import { VariantEntity } from './variant.entity';

export class ProductEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  createAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  variant: VariantEntity;
}
