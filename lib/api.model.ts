import { filterTypeEnum } from "@/data/type";
import { Prisma, PrismaClient } from "@prisma/client";
import { convertBigIntsToNumbers } from "./api.utils";
const prisma = new PrismaClient();

export async function findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PopulationWhereUniqueInput;
    type?: filterTypeEnum;
    year?: number;
}, where?: Prisma.PopulationWhereInput): Promise<any[]> {
    const { skip, take = 20, cursor, type = "population", year } = params;

    return prisma.population.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy: {
            [type]: "desc"
        },
        select: {
            id: true,
            country_name: true,
            region: true,
            flag: true,
            year: true,
            [type]: true,
        }
    });
};

export async function findAllByYear(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PopulationWhereUniqueInput;
    type?: filterTypeEnum;
    year?: number;
}, where?: Prisma.PopulationWhereInput): Promise<any[]> {
    const { skip, take = 20, cursor, type = "population", year } = params;

    return prisma.population.findMany({
        skip,
        take,
        cursor,
        where:{
            year: year,
            ...where
        },
        orderBy: {
            [type]: "desc"
        },
        select: {
            id: true,
            country_name: true,
            region: true,
            flag: true,
            year: true,
            [type]: true,
        }
    });
};

export async function findGroupByYear(
    params: {
        take?: number;
        type?: filterTypeEnum;
    },
    where?: Prisma.PopulationWhereInput
): Promise<any> {
    const { take = 10, type = "population" } = params;
    const selectObject: Record<string, boolean> = {
        id: true,
        country_name: true,
        region: true,
        flag: true,
        year: true,
        [type]: true, // Add other default fields
    };

    const uniqueYears = await prisma.population.groupBy({
        by: ['year'],
        orderBy: {
            year: 'asc',
        },

    });

    return await Promise.all(
        uniqueYears.map(async ({ year }) => {
            const top10Countries = await prisma.population.findMany({
                where: {
                    year,
                    ...where,
                },
                orderBy: {
                    [type]: 'desc',
                },
                take: take,
                select: {
                    country_name: true,
                    region: true,
                    flag: true,
                    [type]: true,
                },
            });

            return {
                year,
                countries: top10Countries.map(convertBigIntsToNumbers),
            };
        })
    );
}
