import { PrismaClient } from '@prisma/client';

export class AuthRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  async createUser(user) {
    return this.prisma.users.create({
      data: user,
    });
  }
}
