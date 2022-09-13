import dotenv from 'dotenv';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';

dotenv.config();

export default class AuthJWT {
  private config: SignOptions;

  private secret:Secret;

  constructor() {
    this.config = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    this.secret = process.env.JWT_SECRET || 'secret';
  }

  public generateToken = (payload:object):string => {
    const token = jwt.sign(
      { ...payload }, 
      this.secret,
      { expiresIn: this.config.expiresIn, algorithm: this.config.algorithm },
    );
    return token;
  };
}