import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinUserRouter } from './routes/signin';
import { signupUserRouter } from './routes/signup';
import { signoutUserRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

// Initailize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const mongoUrl = process.env.MONGO_URL;
const jwtKey = process.env.JWT_KEY;

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: true
}))

app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signupUserRouter);
app.use(signoutUserRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError()
})

app.use(errorHandler);

const start = async () => {
  if (!jwtKey) {
    throw new Error('JWT_KEY must be defined')
  }

  try {
    await mongoose.connect(mongoUrl!);
    console.log('Connected to mongoDB')
  } catch (err) {
    console.error(err)
  }

  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}

start();

