-- CreateTable
CREATE TABLE "todo" (
    "id" TEXT NOT NULL,
    "text" VARCHAR NOT NULL,
    "completedAt" TIMESTAMP NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
