import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { ProductDto } from './product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    return await this.prisma.product.findMany();
  }

  async createProduct(req: ProductDto) {
    const product = await this.prisma.product.create({
      data: {
        ...req,
      },
    });
    return plainToInstance(ProductEntity, product);
  }

  async updateProduct(req: ProductDto) {
    return this.prisma.product.update({
      where: {
        slug: req.slug,
      },
      data: { ...req },
    });
  }
}
