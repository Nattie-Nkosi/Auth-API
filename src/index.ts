import mongoose from 'mongoose';
import { app } from './app';

const port = process.env.SERVER_PORT;
const mongoUrl = process.env.MONGO_URL;
const jwtKey = process.env.JWT_KEY;

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

