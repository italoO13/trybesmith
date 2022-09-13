import connection from '../models/connection';
import { Product } from '../interfaces';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product:Product):Promise<Product> {
    const result = await this.model.create(product);
    return result;
  }
}