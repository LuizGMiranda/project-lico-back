/*
  Warnings:

  - You are about to alter the column `height` on the `player` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Int`.
  - You are about to alter the column `weight` on the `player` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Int`.

*/
-- AlterTable
ALTER TABLE `player` MODIFY `height` INTEGER NULL,
    MODIFY `weight` INTEGER NULL;
