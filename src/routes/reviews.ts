import express from 'express';
import rateCounter from '../handlers/rateCounter';
import { IReview, Reviews } from '../models/reviews';

export const reviewsRouter: express.Router = express.Router();

reviewsRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let filter = {};
    if (req.query.sightId) {
      filter = { sightId: req.query.sightId };
    }
    const sights = await Reviews.find(filter, { _id: 0 });
    res.json(sights);
  },
);

reviewsRouter.post(
  '/rate',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const user = req.body.user;
    const rate = req.body.rate;
    const sightId = req.body.sightId;

    if (!user || !rate || !sightId) {
      res.status(404);
      res.json({ result: `Wrong request. Can't parse user, rate or sight id from payload` });
    } else {
      const filter = {
        user: user,
        sightId: sightId,
      };
      const reviews: Array<IReview> = await Reviews.find(filter);
      if (!reviews.length) {
        await Reviews.insertMany({
          user: user,
          sightId: sightId,
          rate: +rate,
        }).then(async () => {
          await rateCounter(sightId);
        });
      } else {
        await Reviews.findOneAndUpdate(
          filter,
          {
            rate: +rate,
          },
          {},
          () => {},
        ).then(async () => {
          await rateCounter(sightId);
        });
      }
      res.status(200);
      res.json({ result: 'Rate was updated' });
    }
  },
);

reviewsRouter.post(
  '/review',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const user = req.body.user;
    const rate = req.body.rate;
    const sightId = req.body.sightId;
    const review = req.body.review;

    if (!user || !sightId || !rate || !review) {
      res.status(404);
      res.json({
        result: `Wrong request. Can't parse user, sight id, rate or review from payload`,
      });
    } else {
      const filter = {
        user: user,
        sightId: sightId,
      };
      const reviews: Array<IReview> = await Reviews.find(filter);
      if (!reviews.length) {
        await Reviews.insertMany({
          user: user,
          sightId: sightId,
          rate: +rate,
          review: review,
        }).then(async () => {
          await rateCounter(sightId);
        });
      } else {
        await Reviews.findOneAndUpdate(
          filter,
          {
            rate: +rate,
            review: review,
          },
          {},
          () => {},
        ).then(async () => {
          await rateCounter(sightId);
        });
      }
      res.status(200);
      res.json({ result: 'Review was updated' });
    }
  },
);
