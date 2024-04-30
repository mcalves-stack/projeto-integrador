/*
  Warnings:

  - You are about to drop the column `FoodStamps` on the `family` table. All the data in the column will be lost.
  - Added the required column `foodStamps` to the `family` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "family" DROP COLUMN "FoodStamps",
ADD COLUMN     "foodStamps" INTEGER NOT NULL;
