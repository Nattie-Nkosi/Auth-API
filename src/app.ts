import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinUserRouter } from './routes/signin';
import { signupUserRouter } from './routes/signup';
import { signoutUserRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

dotenv.config();

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test'
}));

app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signupUserRouter);
app.use(signoutUserRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError()
})

// some coment

app.use(errorHandler);

export { app };