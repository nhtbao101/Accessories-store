import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async getProducts() {
    try {
      return this.prisma.products.findMany({
        where: { name: 'Alice' },
      });
    } catch (error) {
      console.log('err', error);
    }
  }
}
