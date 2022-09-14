import { Response, Request, NextFunction } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public session = async (req: Request, res:Response<{ token: string }>, next:NextFunction) => {
    try {
      const { username, password } = req.body;
      const result = await this.service.session(username, password);
      res.status(200).json({ token: result });
    } catch (error) {
      next(error);
    }
  };
}