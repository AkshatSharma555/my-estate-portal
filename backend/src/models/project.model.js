// src/models/project.model.js

import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    timeline: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model("Project", projectSchema);
