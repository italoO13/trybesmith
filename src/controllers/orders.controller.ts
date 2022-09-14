import { Response, Request, NextFunction } from 'express';
import { Order } from '../interfaces';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  public getAll = async (req: Request, res:Response<Order[]>, next:NextFunction) => {
    try {
      const result = await this.service.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}