import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product):Promise<Product> {
    const { name, amount } = product;
    const QUERY = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [insert] = await this.connection
      .execute<ResultSetHeader>(QUERY, [name, amount]);
    const { insertId } = insert;
    return {
      id: insertId, 
      ...product,
    };
  }
}