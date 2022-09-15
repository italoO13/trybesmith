import { Response, Request, NextFunction } from 'express';
import { IJWT, Order, RequestWithUserRole } from '../interfaces';
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

  public create = async (req: RequestWithUserRole, res:Response, next:NextFunction) => {
    try {
      const { id } = req.user as IJWT;
      const { productsIds } = req.body;
      const result = await this.service.create(id, productsIds as number[]);
      res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  };
}