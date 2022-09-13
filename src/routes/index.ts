import { Router } from 'express';
import ProductsRouter from './products.route';
import UsersRouter from './users.route';

const router = Router();

router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);

export default router;