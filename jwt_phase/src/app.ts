require('dotenv').config();

import express, { NextFunction, Request, Response } from 'express';
import config from 'config';
import connectDB from './utils/connectDB';

const app = express();

// first route 
app.get(
  '/api/healthChecker',
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      status: 'success',
      message: 'Welcome to CodevoWeb😂😂👈👈',
    });
  }
);

// error handeler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || 'error';
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const port = config.get<number>('port');
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
  connectDB()
});
