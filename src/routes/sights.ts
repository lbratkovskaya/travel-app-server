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
    const { _id } = req.query;
    const filter = _id ? { _id } : {}
    const sights = await Sights.find(filter)
    res.json(sights)
  }
)
