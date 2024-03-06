import express from "express";
import { check, validationResult } from 'express-validator';
import { signupController } from "../controllers/signup.controller.js";
const router = express.Router();
router.route("/")
  .post(
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
    signupController
  );

export { router as signup };