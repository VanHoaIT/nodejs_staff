import { Router } from 'express';
const router = Router();
const loginController = require('../controllers/loginController')

router.get('/:slug', loginController.loginStaff);

//Login
router.get('/', loginController.login);

export default router;
