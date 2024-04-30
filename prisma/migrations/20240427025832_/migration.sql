/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `family` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `family` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "family" ADD COLUMN     "cpf" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "family_cpf_key" ON "family"("cpf");
