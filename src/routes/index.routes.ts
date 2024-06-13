import { Router } from 'express';
const router = Router();

import homeRouter from './home.routes';
import loginRouter from './login.routes';

router.use('/login', loginRouter);
router.use('/', homeRouter);


export default router;