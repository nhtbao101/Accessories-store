import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategory() {
    return this.prisma.category.findMany();
  }

  async createCategory(req: CategoryDto) {
    return this.prisma.category.create({
      data: req,
    });
  }

  async updateCategory(req: CategoryDto) {
    return this.prisma.category.create({
      data: req,
    });
  }
}
