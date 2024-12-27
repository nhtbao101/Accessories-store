import { Module } from '@nestjs/common';
import { ProductModule } from './modules/products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductModule, AuthModule, PrismaModule],
})
export class AppModule {}
