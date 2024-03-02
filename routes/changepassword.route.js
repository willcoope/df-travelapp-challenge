import express from 'express';
import { changepasswordController } from '../controllers/changepassword.controller.js';
const router = express.Router();
router.route('/').put(changepasswordController);
export { router as changepassword };