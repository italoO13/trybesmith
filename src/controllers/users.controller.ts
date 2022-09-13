import { Response, Request, NextFunction } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  public service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  public create = async (req: Request, res:Response<{ token: string }>, next:NextFunction) => {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json({ token: result });
    } catch (error) {
      next(error);
    }
  };
}