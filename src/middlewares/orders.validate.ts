import { Request, NextFunction, Response } from 'express';
import schemaOrder from '../schema/orders.schema';
import CustomError from '../utils/customError';

export default class OrdersValidate {
  public schema: typeof schemaOrder;

  constructor() {
    this.schema = schemaOrder;
  }

  public validateOrder = (req: Request, _res:Response, next:NextFunction) => {
    const { error } = this.schema.validate(req.body);
    if (error) {
      const [status, message] = error.message.split('|');
      return next(new CustomError(Number(status), message));
    }
    next();
  };
}