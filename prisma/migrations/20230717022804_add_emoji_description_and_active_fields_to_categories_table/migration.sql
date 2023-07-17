-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "active" BOOL NOT NULL DEFAULT true;
ALTER TABLE "Category" ADD COLUMN     "description" STRING;
ALTER TABLE "Category" ADD COLUMN     "emoji" STRING;
