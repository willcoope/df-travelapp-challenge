import express from 'express';
import { check, validationResult } from 'express-validator';
import { getreviewsController } from '../controllers/getreviews.controller.js';

const router = express.Router();

router.route("/")
    .post([
        check("location", "Location is required").not().isEmpty()
    ],
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                // console.log(errors);
                console.log(req.body);
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
        getreviewsController
    );

export { router as getreviews };