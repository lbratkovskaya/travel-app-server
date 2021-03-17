import express from 'express';
import { Sights } from '../models/sights';

export const sightsRouter: express.Router = express.Router();

sightsRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let filter = {};
    if (req.query.countryId) {
      filter = { countryId: req.query.countryId };
    } else if (req.query.sightId) {
      filter = { _id: req.query.sightId };
    }
    const sights = await Sights.find(filter);
    res.json(sights);
  },
);
