import { Module } from '@nestjs/common';
import { ProductService } from './modules/products/products.service';
import { ProductController } from './modules/products/products.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class AppModule {}
