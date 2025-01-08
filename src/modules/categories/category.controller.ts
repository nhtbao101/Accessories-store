import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';
import AdminGuard from 'src/auth/guard/admin.guard';

@Controller('/category/')
@ApiBearerAuth()
@UseGuards(AdminGuard)
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.CategoryService.getCategories();
  }

  @Get(':id')
  async getCategory(@Param() slug: string) {
    return this.CategoryService.getCategory(slug);
  }

  @Post()
  async createCategory(@Body() category: CategoryDto) {
    return this.CategoryService.createCategory(category);
  }

  @Put(':id')
  async updateCategory(@Body() category: CategoryDto) {
    return this.CategoryService.updateCategory(category);
  }
}
