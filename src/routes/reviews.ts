import express from 'express'
import { Reviews } from '../models/reviews'

export const reviewsRouter: express.Router = express.Router()

reviewsRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let filter = {}
    if (req.query.countryId) {
      filter = {countryId: req.query.countryId}
    }
    const sights = await Reviews.find(filter, { _id: 0 })
    res.json(sights)
  }
)
