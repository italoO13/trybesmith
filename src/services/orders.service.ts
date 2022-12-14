import connection from '../models/connection';
import { Order } from '../interfaces';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll():Promise<Order[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async create(userId:number, products: number[]):Promise<Order> {
    await Promise.all(products.map((prodId:number) => this.model.create(userId, prodId)));
    return {
      userId,
      productsIds: products,
    };
  }
}