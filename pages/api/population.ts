import { NextApiRequest, NextApiResponse } from "next";
import { Population, Prisma, PrismaClient } from "@prisma/client";
import populationValidator from "@/lib/validators/population.validator";
import { findAll } from "@/lib/api.model";
import { ResponseData, convertBigIntsToNumbers } from "@/lib/api.utils";
import { regionType } from "@/data/type";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    await populationValidator(req, res)
    let population = await findAll(req.query, { region: { in: regionType } })

    
    res.status(200).json({
        type: 'success',
        status: 200,
        message: "get all population",
        length: population.length,
        data: population.map(convertBigIntsToNumbers)
    })
}
