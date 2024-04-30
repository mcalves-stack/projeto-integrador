/*
  Warnings:

  - You are about to drop the column `cestasBasicas` on the `family` table. All the data in the column will be lost.
  - Added the required column `FoodStamps` to the `family` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "family" DROP COLUMN "cestasBasicas",
ADD COLUMN     "FoodStamps" INTEGER NOT NULL;
