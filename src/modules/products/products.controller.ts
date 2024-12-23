import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('products')
  async getProducts() {
    return this.productsService.getProducts();
  }
}
