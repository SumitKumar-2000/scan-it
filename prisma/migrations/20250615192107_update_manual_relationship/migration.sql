/*
  Warnings:

  - You are about to drop the `_ProductManuals` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `UserManual` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductManuals" DROP CONSTRAINT "_ProductManuals_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductManuals" DROP CONSTRAINT "_ProductManuals_B_fkey";

-- AlterTable
ALTER TABLE "UserManual" ADD COLUMN     "productId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ProductManuals";

-- AddForeignKey
ALTER TABLE "UserManual" ADD CONSTRAINT "UserManual_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
