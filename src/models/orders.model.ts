import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll():Promise<Order[]> {
    const QUERY = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds FROM 
    Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    GROUP BY o.id 
    ORDER BY o.userId`;
    const [result] = await this.connection.execute(QUERY);
    return result as Order[];
  }
}