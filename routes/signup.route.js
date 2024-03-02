import express from "express";
import { signupController } from "../controllers/signup.controller.js";
const router = express.Router();
router.route("/").post(signupController);
export { router as signup };