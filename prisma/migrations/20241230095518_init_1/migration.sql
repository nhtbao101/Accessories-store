/*
  Warnings:

  - Made the column `full_name` on table `admin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `admin_role` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customer_id` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order_id` on table `order_item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `order_item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `order_item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `order_item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order_id` on table `payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `payment_method` on table `payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "full_name" SET NOT NULL;

-- AlterTable
ALTER TABLE "admin_role" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "order" ALTER COLUMN "customer_id" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "total" SET NOT NULL;

-- AlterTable
ALTER TABLE "order_item" ALTER COLUMN "order_id" SET NOT NULL,
ALTER COLUMN "product_id" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL;

-- AlterTable
ALTER TABLE "payment" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "order_id" SET NOT NULL,
ALTER COLUMN "payment_method" SET NOT NULL;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "phone_number" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
