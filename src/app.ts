const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
import TodoRoutes from './routes/Taskroutes';
import type { ConnectOptions, Mongoose } from 'mongoose';

const app = express();
app.use(express.json());

interface EnvConfig {
  MONGO_URI?: string;
  PORT?: string;
  [key: string]: string | undefined;
}

const env: EnvConfig = process.env;

mongoose.connect(env.MONGO_URI as string, {} as ConnectOptions)
  .then((): void => console.log("MongoDB connected"))
  .catch((err: unknown): void => console.log(err));

app.use('/api/v1', TodoRoutes);

app.listen(Number(process.env.PORT) || 3000, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${process.env.PORT}`);
});