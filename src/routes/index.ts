import express from 'express';
import { authRouter } from './auth';
import { countriesRouter } from './countries';
import { sightsRouter } from './sights';
import { reviewsRouter } from './reviews';
import { proxyRouter } from './proxy';

export interface IRoute {
  endpoint: string;
  router: express.Router;
}

const root: express.Router = express.Router();
root.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send(200);
});

export const routes: Array<IRoute> = [
  { endpoint: '/', router: root },
  { endpoint: '/auth', router: authRouter },
  { endpoint: '/countries', router: countriesRouter },
  { endpoint: '/sights', router: sightsRouter },
  { endpoint: '/reviews', router: reviewsRouter },
  { endpoint: '/currencies', router: proxyRouter },
];
