import express from 'express';
import { removefavouriteController } from '../controllers/removefavourite.controller.js';
const router = express.Router();
router.route('/').put(removefavouriteController);
export { router as removefavourite };