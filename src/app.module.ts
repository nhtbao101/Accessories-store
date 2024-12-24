import { Module } from '@nestjs/common';
import { ProductModule } from './modules/products/products.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProductModule, PrismaModule],
})
export class AppModule {}
