import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import ProductsValidate from '../middlewares/products.validate';

const router = Router();
const productsController = new ProductsController();
const productsValidate = new ProductsValidate();

router.post('/', productsValidate.validateProduct, productsController.create);
router.get('/', productsController.getAll);

export default router;