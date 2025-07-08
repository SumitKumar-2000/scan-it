/*
  Warnings:

  - Made the column `description` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('PRODUCT', 'COMPANY', 'OTHER');

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "CategoryType" NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_code_key" ON "Category"("code");
