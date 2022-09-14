import { Router } from 'express';
import ProductsRouter from './products.route';
import UsersRouter from './users.route';
import OrdersRouter from './orders.route';

const router = Router();

router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);
router.use('/orders', OrdersRouter);

export default router;