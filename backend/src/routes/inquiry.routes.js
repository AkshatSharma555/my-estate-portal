// src/routes/inquiry.routes.js
import { Router } from "express";
import { createInquiry, getAllInquiries,deleteInquiry } from "../controllers/inquiry.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/submit").post(createInquiry);
router.route("/all").get(verifyJWT, getAllInquiries);
router.route("/:inquiryId").delete(verifyJWT, deleteInquiry);

export default router;