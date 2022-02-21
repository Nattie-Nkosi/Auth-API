import express, { Request, Response } from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import mongoose from 'mongoose';
import dev from './config/dev';

import { currentUserRouter } from './routes/current-user';
import { signinUserRouter } from './routes/signin';
import { signupUserRouter } from './routes/signup';
import { signoutUserRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signupUserRouter);
app.use(signoutUserRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError()
})

app.use(errorHandler);
 
const start = async () => {
  try {
    await mongoose.connect(dev.mongoURL);
    console.log('Connected to mongoDB')
  } catch(err) {
    console.error(err)
  } 

  app.listen(dev.port, () => {
    console.log(`Listening on port ${dev.port}...`);
  });
}

start();

