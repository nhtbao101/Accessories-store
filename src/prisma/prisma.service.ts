import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async onModuleInit() {
    console.log('connected');
    await this.$connect();
  }
  async onModuleDestroy() {
    console.log('disconnect');
    await this.$disconnect();
  }
}
