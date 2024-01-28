/*
  Warnings:

  - You are about to alter the column `population` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_of_children_under_the_age_of_1` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_of_children_under_the_age_of_5` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_of_children_under_the_age_of_15` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_under_the_age_of_25` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_15_to_64_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_older_than_15_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_older_than_18_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_at_age_1` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_1_to_4_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_5_to_9_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_10_to_14_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_15_to_19_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_20_to_29_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_30_to_39_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_40_to_49_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_50_to_59_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_60_to_69_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_70_to_79_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_80_to_89_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_aged_90_to_99_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `population_older_than_100_years` on the `population` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "population" ALTER COLUMN "population" SET DATA TYPE INTEGER,
ALTER COLUMN "population_of_children_under_the_age_of_1" SET DATA TYPE INTEGER,
ALTER COLUMN "population_of_children_under_the_age_of_5" SET DATA TYPE INTEGER,
ALTER COLUMN "population_of_children_under_the_age_of_15" SET DATA TYPE INTEGER,
ALTER COLUMN "population_under_the_age_of_25" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_15_to_64_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_older_than_15_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_older_than_18_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_at_age_1" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_1_to_4_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_5_to_9_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_10_to_14_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_15_to_19_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_20_to_29_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_30_to_39_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_40_to_49_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_50_to_59_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_60_to_69_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_70_to_79_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_80_to_89_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_aged_90_to_99_years" SET DATA TYPE INTEGER,
ALTER COLUMN "population_older_than_100_years" SET DATA TYPE INTEGER;
