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
  productsIds?:[]
}