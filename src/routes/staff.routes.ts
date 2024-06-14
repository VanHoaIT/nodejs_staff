import { Router } from 'express';
const router = Router();
const staffController = require('../controllers/staffController');

router.get('/', staffController.getStaff);

export default router;
