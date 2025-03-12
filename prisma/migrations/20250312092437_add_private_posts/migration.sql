/*
  Warnings:

  - Added the required column `password` to the `Guestbook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Guestbook" ADD COLUMN     "isPrivate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" TEXT NOT NULL;
