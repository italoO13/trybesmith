import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

export interface Product {
  id?:number,
  name: string,
  amount: string,
  orderId?: number
}

export interface User {
  id?:number, 
  username: string,
  classe: string,
  level: string,
  password: string,
}

export interface Order {
  id?:number, 
  userId:number,
  productsIds?:number[]
}
export interface RequestWithUserRole extends Request {
  user?: {
    id: number, 
    username?:string,
    classe?:string,
  },
}

export interface IJWT extends JwtPayload {
  id:number, 
  username?:string, 
  classe?:string,
}