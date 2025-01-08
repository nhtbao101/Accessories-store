/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `category` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `category` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "category" ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "category_slug_key" ON "category"("slug");
