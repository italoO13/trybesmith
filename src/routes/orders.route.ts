import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import ValidateUser from '../middlewares/auth';
import OrdersValidate from '../middlewares/orders.validate';

const router = Router();
const ordersController = new OrdersController();
const validateUser = new ValidateUser();
const ordersValidate = new OrdersValidate();

router.get('/', ordersController.getAll);
router.post('/', validateUser.authenticated, ordersValidate.validateOrder, ordersController.create);

export default router;