import express from 'express';
import { check, validationResult } from "express-validator";
import { addreviewController } from '../controllers/addreview.controller.js';

const router = express.Router();

router.route("/").post(
    [
        check("username", "Username is required").not().isEmpty(),
        check("location", "Location is required").not().isEmpty(),
        check("rating", "Rating is required").not().isEmpty(),
        check("review", "Review is required").not().isEmpty(),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    addreviewController
);

export { router as addreview };