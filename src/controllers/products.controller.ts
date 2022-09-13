import { Response, Request, NextFunction } from 'express';
import { Product } from '../interfaces';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public create = async (req: Request, res:Response<Product>, next:NextFunction) => {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
}