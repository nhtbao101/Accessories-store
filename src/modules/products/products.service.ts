import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    try {
      return this.prisma.products.findMany();
    } catch (error) {
      console.log('error', error);
    }
  }
}
