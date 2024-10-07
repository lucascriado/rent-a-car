import { Router } from 'express';
import { register, login } from '../controllers/authUsersController';

const router = Router();

router.get('/register', register);
router.get('/login', login);

export default router;