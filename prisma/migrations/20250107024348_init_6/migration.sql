/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "admin_id_key";

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "variant" (
    "id" SERIAL NOT NULL,
    "size" TEXT,
    "color" TEXT,
    "material" TEXT,
    "price" INTEGER NOT NULL,
    "quantity" SMALLINT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "image" TEXT NOT NULL,

    CONSTRAINT "variant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "variant_id_key" ON "variant"("id");

-- CreateIndex
CREATE UNIQUE INDEX "product_slug_key" ON "product"("slug");

-- AddForeignKey
ALTER TABLE "variant" ADD CONSTRAINT "variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
