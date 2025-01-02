import { Body, Controller, Get, Post } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('category')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @Get('')
  async getCategory() {
    return this.CategoryService.getCategory();
  }

  @Post('/create')
  async createCategory(@Body() category: CategoryDto) {
    return this.CategoryService.createCategory(category);
  }

  @Post('/:id/update')
  async updateCategory(@Body() category: CategoryDto) {
    return this.CategoryService.createCategory(category);
  }
}
