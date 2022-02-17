import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signinUserRouter } from './routes/signin';
import { signupUserRouter } from './routes/signup';
import { signoutUserRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signupUserRouter);
app.use(signoutUserRouter);

app.use(errorHandler);

app.listen('3000', () => {
  console.log('Listening on port 3000...')
});