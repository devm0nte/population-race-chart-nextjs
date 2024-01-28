-- CreateEnum
CREATE TYPE "TypeRegion" AS ENUM ('Africa', 'Americas', 'Asia', 'Continent', 'Europe', 'Group', 'Oceania', 'World', 'Etc');

-- CreateTable
CREATE TABLE "population" (
    "id" SERIAL NOT NULL,
    "country_name" VARCHAR(100) NOT NULL,
    "region" "TypeRegion" NOT NULL,
    "flag" VARCHAR(500),
    "year" INTEGER,
    "population" BIGINT,
    "population_of_children_under_the_age_of_1" BIGINT,
    "population_of_children_under_the_age_of_5" BIGINT,
    "population_of_children_under_the_age_of_15" BIGINT,
    "population_under_the_age_of_25" BIGINT,
    "population_aged_15_to_64_years" BIGINT,
    "population_older_than_15_years" BIGINT,
    "population_older_than_18_years" BIGINT,
    "population_at_age_1" BIGINT,
    "population_aged_1_to_4_years" BIGINT,
    "population_aged_5_to_9_years" BIGINT,
    "population_aged_10_to_14_years" BIGINT,
    "population_aged_15_to_19_years" BIGINT,
    "population_aged_20_to_29_years" BIGINT,
    "population_aged_30_to_39_years" BIGINT,
    "population_aged_40_to_49_years" BIGINT,
    "population_aged_50_to_59_years" BIGINT,
    "population_aged_60_to_69_years" BIGINT,
    "population_aged_70_to_79_years" BIGINT,
    "population_aged_80_to_89_years" BIGINT,
    "population_aged_90_to_99_years" BIGINT,
    "population_older_than_100_years" BIGINT,

    CONSTRAINT "population_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "population_and_demography_country_name_idx" ON "population"("country_name", "year");
