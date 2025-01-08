import { ApiProperty } from '@nestjs/swagger';

export class VariantEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  size: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  material: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  createAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  image: string;
}
