import express from 'express'
import { Countries } from '../models/countries'

export const countriesRouter: express.Router = express.Router()

countriesRouter.options(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send(200)
  }
)

countriesRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const countries = await Countries.find({})
    res.json(countries)
  }
)
