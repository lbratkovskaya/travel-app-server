import express from 'express'
import { Sights } from '../models/sights'

export const sightsRouter: express.Router = express.Router()

sightsRouter.options(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send(200)
  }
)

sightsRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const sights = await Sights.find({}, { _id: 0 })
    res.json(sights)
  }
)
