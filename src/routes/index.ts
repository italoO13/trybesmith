import { Router } from 'express';
import ProductsRouter from './products.route';
import UsersRouter from './users.route';
import OrdersRouter from './orders.route';
import LoginRouter from './login.route';

const router = Router();

router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);
router.use('/users', UsersRouter);
router.use('/login', LoginRouter);

export default router;