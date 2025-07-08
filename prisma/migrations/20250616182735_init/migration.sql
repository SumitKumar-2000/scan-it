/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `logoUrl` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ManualSection` table. All the data in the column will be lost.
  - You are about to drop the column `manualId` on the `ManualSection` table. All the data in the column will be lost.
  - You are about to drop the column `orderIndex` on the `ManualSection` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ManualSection` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the column `sectionId` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `modelNo` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `releaseAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `UserManual` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `UserManual` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `UserManual` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UserManual` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manual_id` to the `ManualSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `ManualSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section_id` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `UserManual` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `UserManual` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ManualSection" DROP CONSTRAINT "ManualSection_manualId_fkey";

-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_companyId_fkey";

-- DropForeignKey
ALTER TABLE "UserManual" DROP CONSTRAINT "UserManual_productId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "createdAt",
DROP COLUMN "logoUrl",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "logo_url" VARCHAR(255),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ManualSection" DROP COLUMN "createdAt",
DROP COLUMN "manualId",
DROP COLUMN "orderIndex",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "manual_id" INTEGER NOT NULL,
ADD COLUMN     "order_index" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "createdAt",
DROP COLUMN "sectionId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "section_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "companyId",
DROP COLUMN "createdAt",
DROP COLUMN "imageUrl",
DROP COLUMN "modelNo",
DROP COLUMN "releaseAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "company_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image_url" VARCHAR(255),
ADD COLUMN     "model_no" VARCHAR(100),
ADD COLUMN     "release_at" DATE,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserManual" DROP COLUMN "createdAt",
DROP COLUMN "productId",
DROP COLUMN "publishedAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "product_id" INTEGER NOT NULL,
ADD COLUMN     "published_at" DATE,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserManual" ADD CONSTRAINT "UserManual_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManualSection" ADD CONSTRAINT "ManualSection_manual_id_fkey" FOREIGN KEY ("manual_id") REFERENCES "UserManual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "ManualSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
