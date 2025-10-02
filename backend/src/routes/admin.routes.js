// src/routes/admin.routes.js
import { Router } from "express";
import { registerAdmin, loginAdmin, changeCurrentPassword } from "../controllers/admin.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);

export default router;