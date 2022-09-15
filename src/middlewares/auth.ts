import { NextFunction, Response } from 'express';
import { RequestWithUserRole } from '../interfaces';
import CustomError from '../utils/customError';
import AuthJWT from '../utils/auth';

export default class ValidateUser {
  public auth: AuthJWT;

  constructor() {
    this.auth = new AuthJWT();
  }

  public authenticated = (req: RequestWithUserRole, _res:Response, next:NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return next(new CustomError(401, 'Token not found'));
    }
    try {
      const decode = this.auth.verifyToken(authorization);
      req.user = decode;
      next();
    } catch (error) {
      next(new CustomError(401, 'Invalid token'));
    }
  };
}