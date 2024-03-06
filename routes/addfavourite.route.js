import express from 'express';
import { check, validationResult } from 'express-validator';
import { addfavouriteController } from '../controllers/addfavourite.controller.js';
const router = express.Router();
router.route("/")
  .put(
    [
      check('username', 'Username is required').not().isEmpty(),
      check('password', 'Password is required').not().isEmpty(),
      check('newfavourite', 'newfavourite is required').not().isEmpty()
    ],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    addfavouriteController
  );
export { router as addfavourite };