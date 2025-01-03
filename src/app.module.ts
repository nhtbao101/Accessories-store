import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    UserModule,
  ],
})
export class AppModule {}
