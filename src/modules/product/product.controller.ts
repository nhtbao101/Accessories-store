import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  @Post()
  async createProduct(@Body() product: ProductDto) {
    return this.productService.createProduct(product);
  }

  @Put()
  async updateProduct(@Body() product: ProductDto) {
    return this.productService.createProduct(product);
  }
}
