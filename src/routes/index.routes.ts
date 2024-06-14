import { Router } from 'express';
const router = Router();

import homeRouter from './home.routes';
import loginRouter from './login.routes';
import staffRouter from './staff.routes';

router.use('/staff', staffRouter);
router.use('/login', loginRouter);
router.use('/', homeRouter);

export default router;
