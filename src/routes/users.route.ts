import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import UsersValidate from '../middlewares/users.validate';

const router = Router();
const usersController = new UsersController();
const usersValidate = new UsersValidate();

router.post('/', usersValidate.validateUser, usersController.create);

export default router;