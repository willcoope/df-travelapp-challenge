import express from 'express';
import { addfavouriteController } from '../controllers/addfavourite.controller.js';
const router = express.Router();
router.route('/').put(addfavouriteController);
export { router as addfavourite };