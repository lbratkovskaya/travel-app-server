import express from 'express';
import { Countries } from '../models/countries';

export const countriesRouter: express.Router = express.Router()

countriesRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const countries = await Countries.find({}, { _id: 0 })
    res.json(countries)
  },
)
