import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async createProduct(req: ProductDto) {
    return this.prisma.product.create({
      data: req,
    });
  }
}
