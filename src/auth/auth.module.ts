import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { AdminModule } from 'src/modules/admin/admin.module';
import { UserJWTStrategy } from './strategy/user.strategy';
import { AdminJWTStrategy } from './strategy/admin.strategy';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [PrismaModule, PassportModule, AdminModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, AdminJWTStrategy, UserJWTStrategy],
  exports: [AuthService],
})
export class AuthModule {}
