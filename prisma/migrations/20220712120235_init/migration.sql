-- DropForeignKey
ALTER TABLE "Hobbie" DROP CONSTRAINT "Hobbie_userId_fkey";

-- AddForeignKey
ALTER TABLE "Hobbie" ADD CONSTRAINT "Hobbie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
