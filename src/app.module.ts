import { Module } from '@nestjs/common';

import { ProductModule } from './modules/product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './modules/categories/category.module';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
import { ConfigModule } from './shared/config.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    UserModule,
    AdminModule,
    ConfigModule,
  ],
})
export class AppModule {}
