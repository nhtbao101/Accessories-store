import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories() {
    return this.prisma.category.findMany();
  }

  async getCategory(slug: string) {
    return this.prisma.category.findUnique({
      where: {
        slug: slug,
      },
    });
  }

  async createCategory(req: CategoryDto) {
    return this.prisma.category.create({
      data: req,
    });
  }

  async updateCategory(req: CategoryDto) {
    return this.prisma.category.update({
      where: {
        slug: req.slug,
      },
      data: req,
    });
  }
}
