/*
  Warnings:

  - You are about to drop the `inventory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "clothes" DROP CONSTRAINT "clothes_inventory_id_fkey";

-- DropForeignKey
ALTER TABLE "foods" DROP CONSTRAINT "foods_inventory_id_fkey";

-- DropForeignKey
ALTER TABLE "materials" DROP CONSTRAINT "materials_inventory_id_fkey";

-- DropTable
DROP TABLE "inventory";
