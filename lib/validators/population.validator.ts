
import { check, query, validationResult } from 'express-validator'
import errorMiddleware from '../middleware'
import validateMiddleware from '../validator.middleware'
import { filterType } from '@/data/type'
import { NextApiRequest, NextApiResponse } from 'next'
import handler from '@/pages/api/population'

const validateBody = errorMiddleware(
    validateMiddleware ([
        query("skip").optional().isInt().toInt(),
        query("take").optional().isInt().toInt(),
        query("cursor").optional().isInt().toInt(),
        query("orderBy").optional().isString(),
        query("type").optional().isIn(filterType),
        query("year").optional().isInt().toInt(),
    ], validationResult)
)

export default async function populationValidator(req:NextApiRequest, res:NextApiResponse) {
  switch (req.method) {
    case "GET":
      await validateBody(req, res)

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }
      break;
    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." })
      break;
  }
}