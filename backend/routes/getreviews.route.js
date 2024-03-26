import express from 'express';
import { getreviewsController } from '../controllers/getreviews.controller.js';

const router = express.Router();

router.route("/").get(getreviewsController);

export { router as getreviews };