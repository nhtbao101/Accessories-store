/*
  Warnings:

  - You are about to drop the column `userRole` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "order_item" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "userRole",
ADD COLUMN     "user_role" SMALLINT;
