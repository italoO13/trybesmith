import { Request, NextFunction, Response } from 'express';
import schemaProduct from '../schema/products.schema';
import CustomError from '../utils/customError';

export default class ProductsValidate {
  public schema: typeof schemaProduct;

  constructor() {
    this.schema = schemaProduct;
  }

  public validateProduct = (req: Request, _res:Response, next:NextFunction) => {
    const { error } = this.schema.validate(req.body);
    if (error) {
      const [status, message] = error.message.split('|');
      throw new CustomError(Number(status), message);
    }
    next();
  };
}