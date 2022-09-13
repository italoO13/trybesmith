import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getByName(username:string, classe:string):Promise<User[]> {
    const QUERY = `SELECT * FROM Trybesmith.Users WHERE 
    username = ? AND classe =? `;
    const [result] = await this.connection
      .execute(QUERY, [username, classe]);
    return result as User[];
  }

  public async create(user:User):Promise<number> {
    const { username, classe, level, password } = user;
    const QUERY = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) VALUES (?,?,?,?)`;

    const [insert] = await this.connection
      .execute<ResultSetHeader>(QUERY, [username, classe, level, password]);
    const { insertId } = insert;
    return insertId;
  }
}