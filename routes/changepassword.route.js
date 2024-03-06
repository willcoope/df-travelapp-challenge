import express from 'express';
import { check, validationResult } from 'express-validator';
import { changepasswordController } from '../controllers/changepassword.controller.js';
const router = express.Router();
router.route("/")
  .put(
    [
      check('username', 'Username is required').not().isEmpty(),
      check('oldpassword', 'Old password is required').not().isEmpty(),
      check('newpassword', 'New Password is required').not().isEmpty()
    ],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    changepasswordController
  );

export { router as changepassword };