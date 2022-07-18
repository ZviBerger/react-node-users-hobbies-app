-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "address" TEXT,
    "phoneNumber" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hobbie" (
    "userId" INTEGER NOT NULL,
    "hobbies" TEXT[],

    CONSTRAINT "Hobbie_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "Hobbie" ADD CONSTRAINT "Hobbie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
