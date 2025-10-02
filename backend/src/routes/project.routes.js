// src/routes/project.routes.js
import { Router } from "express";
import { createProject, getAllProjects ,getProjectById,deleteProject } from "../controllers/project.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/all").get(getAllProjects);

router.route("/create").post(
    verifyJWT,
    upload.fields([
        { name: "coverImage", maxCount: 1 },
        { name: "images", maxCount: 10 }
    ]),
    createProject
);
router.route("/:projectId")
    .get(getProjectById)
    .delete(verifyJWT, deleteProject);

export default router;