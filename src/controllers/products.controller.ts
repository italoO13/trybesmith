import { Response, Request, NextFunction } from 'express';
import { Product } from '../interfaces';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public getAll = async (req: Request, res:Response<Product[]>, next:NextFunction) => {
    try {
      const result = await this.service.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res:Response<Product>, next:NextFunction) => {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
}