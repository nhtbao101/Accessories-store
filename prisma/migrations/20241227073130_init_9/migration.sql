/*
  Warnings:

  - A unique constraint covering the columns `[test]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_test_key" ON "users"("test");
