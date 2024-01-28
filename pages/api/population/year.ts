import { NextApiRequest, NextApiResponse } from "next";
import populationValidator from "@/lib/validators/population.validator";
import { ResponseData, convertBigIntsToNumbers } from "@/lib/api.utils";
import { findGroupByYear } from "@/lib/api.model";
import { regionType } from "@/data/type";


export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    await populationValidator(req, res)
    let population = await findGroupByYear(req.query, { region: { in: regionType } })

    res.status(200).json({
        type: 'success',
        status: 200,
        message: "get top population each year",
        length: population.length,
        data: population
    })
}
