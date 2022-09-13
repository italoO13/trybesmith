import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import CustomError from './utils/customError';

const app = express();

app.use(express.json());
app.use('/', routes);
app.use((err: CustomError, req: Request, res:Response, _next:NextFunction) => {
  console.log(err);
  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
