import { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
    type: string,
    status: number,
    message: string,
    length?: number,
    data: any,
}

const filterType: string[] = [
    "population",
    "population_of_children_under_the_age_of_1",
    "population_of_children_under_the_age_of_5",
    "population_of_children_under_the_age_of_15",
    "population_under_the_age_of_25",
    "population_aged_15_to_64_years",
    "population_older_than_15_years",
    "population_older_than_18_years",
    "population_at_age_1",
    "population_aged_1_to_4_years",
    "population_aged_5_to_9_years",
    "population_aged_10_to_14_years",
    "population_aged_15_to_19_years",
    "population_aged_20_to_29_years",
    "population_aged_30_to_39_years",
    "population_aged_40_to_49_years",
    "population_aged_50_to_59_years",
    "population_aged_60_to_69_years",
    "population_aged_70_to_79_years",
    "population_aged_80_to_89_years",
    "population_aged_90_to_99_years",
    "population_older_than_100_years",
]

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(200).json({
        type: 'success',
        status: 200,
        message: "get all population type for filter",
        length: filterType.length,
        data: filterType
    })
}