import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv-defaults/config';
import bodyParser from 'body-parser';
import { routes, IRoute } from './routes';

const appPort = process.env.PORT;
const mongoUrl = process.env.MONGO_URL ? process.env.MONGO_URL : 'mongo://localhost:27017/test';
const app: express.Application = express();
export const accessTokenSecret = process.env.TOKEN ? process.env.TOKEN : 'TOKEN';

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '50mb' }));
routes.forEach((route: IRoute) => {
  app.use(route.endpoint, route.router);
});

app.use('/getsome', (req, res) => {});
async function start() {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    app.listen(appPort, () => {
      console.log(`App is listening on port ${appPort}!`);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();
