import connection from '../models/connection';
import UsersModel from '../models/users.model';
import CustomError from '../utils/customError';
import { User } from '../interfaces';
import AuthJWT from '../utils/auth';

export default class LoginService {
  public model: UsersModel;

  public auth: AuthJWT;

  constructor() {
    this.model = new UsersModel(connection);
    this.auth = new AuthJWT();
  }

  private async verifyUserExists(username:string, password:string):Promise<User> {
    const result = await this.model.session(username, password);
    if (result.length === 0) {
      throw new CustomError(401, 'Username or password invalid');
    }
    return result[0] as User;
  }

  public async session(username:string, password:string):Promise<string> {
    const user = await this.verifyUserExists(username, password);
    return this.auth.generateToken({
      id: user.id,
      username: user.username,
      classe: user.classe,
    });
  }
}