/*
  Warnings:

  - You are about to drop the column `test` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `test2` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "test",
DROP COLUMN "test2";
