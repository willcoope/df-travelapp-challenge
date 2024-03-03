import express from 'express';
import { getfavouritesController } from '../controllers/getfavourites.controller.js';
const router = express.Router();
router.route('/').get(getfavouritesController);
export { router as getfavourites };