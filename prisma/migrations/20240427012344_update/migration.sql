-- AlterTable
ALTER TABLE "contactsfamilys" ADD COLUMN     "familyId" TEXT;

-- AddForeignKey
ALTER TABLE "contactsfamilys" ADD CONSTRAINT "contactsfamilys_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE SET NULL ON UPDATE CASCADE;
