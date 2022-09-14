import { Request, NextFunction, Response } from 'express';
import schemaUser from '../schema/users.schema';
import CustomError from '../utils/customError';

export default class UsersValidate {
  public schema: typeof schemaUser;

  constructor() {
    this.schema = schemaUser;
  }

  public validateUser = (req: Request, _res:Response, next:NextFunction) => {
    const { error } = this.schema.validate(req.body);
    if (error) {
      const [status, message] = error.message.split('|');
      throw new CustomError(Number(status), message);
    }
    next();
  };
}