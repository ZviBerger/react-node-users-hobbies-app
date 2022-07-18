/*
  Warnings:

  - The `hobbies` column on the `Hobbie` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Hobbie" DROP COLUMN "hobbies",
ADD COLUMN     "hobbies" TEXT[];
