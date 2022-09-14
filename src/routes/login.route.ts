import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import LoginValidate from '../middlewares/login.validate';

const router = Router();
const loginController = new LoginController();
const loginValidate = new LoginValidate();

router.post('/', loginValidate.validateSession, loginController.session);

export default router;