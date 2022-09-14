import { Request, NextFunction, Response } from 'express';
import schemaSession from '../schema/login.schema';
import CustomError from '../utils/customError';

export default class LoginValidate {
  public schema: typeof schemaSession;

  constructor() {
    this.schema = schemaSession;
  }

  public validateSession = (req: Request, _res:Response, next:NextFunction) => {
    const { error } = this.schema.validate(req.body);
    if (error) {
      throw new CustomError(400, error.message);
    }
    next();
  };
}