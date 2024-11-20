-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "wpm" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);
