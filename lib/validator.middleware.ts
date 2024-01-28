import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

export default function validateMiddleware(validations:any[], validationResult:any) {
  return async (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => {
    await Promise.all(validations.map((validation) => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next(req,res)
    }

    res.status(422).json({ errors: errors.array() })
  }
}