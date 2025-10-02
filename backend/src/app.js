// src/app.js

import dotenv from "dotenv";
dotenv.config({ path: '../.env' });
import express from "express";
import cors from "cors";
import config from "./config/index.js";

const app = express();

app.use(cors({
    origin: config.CORS_ORIGIN || "http://localhost:5173",
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

import projectRouter from './routes/project.routes.js';
import adminRouter from './routes/admin.routes.js';
import inquiryRouter from './routes/inquiry.routes.js';

app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/inquiries", inquiryRouter);

export { app };