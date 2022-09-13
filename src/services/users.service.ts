import connection from '../models/connection';
import UsersModel from '../models/users.model';
import CustomError from '../utils/customError';
import { User } from '../interfaces';
import AuthJWT from '../utils/auth';

export default class UsersService {
  public model: UsersModel;

  public auth: AuthJWT;

  constructor() {
    this.model = new UsersModel(connection);
    this.auth = new AuthJWT();
  }

  private async verifyUserExists(username:string, classe:string):Promise<void> {
    const result = await this.model.getByName(username, classe);
    if (result.length !== 0) {
      throw new CustomError(409, 'User already exists');
    }
  }

  public async create(user:User):Promise<string> {
    const { username, classe } = user;
    await this.verifyUserExists(username, classe);
    const id = await this.model.create(user);
    return this.auth.generateToken({ id, username });
  }
}