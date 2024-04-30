/*
  Warnings:

  - You are about to drop the `home` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "home" DROP CONSTRAINT "home_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "home" DROP CONSTRAINT "home_contact_id_fkey";

-- DropForeignKey
ALTER TABLE "home" DROP CONSTRAINT "home_family_id_fkey";

-- DropTable
DROP TABLE "home";
