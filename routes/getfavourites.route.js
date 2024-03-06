import express from 'express';
import { check, validationResult } from 'express-validator';
import { getfavouritesController } from '../controllers/getfavourites.controller.js';
const router = express.Router();
router.route("/")
  .get(
    [
      check('username', 'Username is required').not().isEmpty(),
      check('password', 'Password is required').not().isEmpty()
    ],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    getfavouritesController
  );

export { router as getfavourites };