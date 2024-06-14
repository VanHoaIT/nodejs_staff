import { Router } from 'express';
const router = Router();
const homeController = require('../controllers/homeController');

router.get('/:slug', homeController.about);

//index
router.get('/', homeController.home);

export default router;
