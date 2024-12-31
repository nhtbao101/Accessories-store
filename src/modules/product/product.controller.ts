import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('')
  async getProducts() {
    return this.productService.getProducts();
  }

  @Post('/create')
  async createProduct(product: ProductDto) {
    return this.productService.createProduct(product);
  }
}
