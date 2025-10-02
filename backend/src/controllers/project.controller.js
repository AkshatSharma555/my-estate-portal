// src/controllers/project.controller.js
import { Project } from "../models/project.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const createProject = async (req, res) => {
    const { name, description, location, category, status, timeline } = req.body;

    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    const galleryImagesLocalPaths = req.files?.images?.map(file => file.path) || [];

    if (!coverImageLocalPath) {
        return res.status(400).json({ message: "Cover image is required" });
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    const galleryImages = [];
    for (const path of galleryImagesLocalPaths) {
        const uploadedImage = await uploadOnCloudinary(path);
        if (uploadedImage) {
            galleryImages.push(uploadedImage.url);
        }
    }

    if (!coverImage) {
        return res.status(500).json({ message: "Failed to upload cover image" });
    }

    const project = await Project.create({
        name, description, location, category, status, timeline,
        coverImage: coverImage.url,
        images: galleryImages
    });

    return res.status(201).json({
        message: "Project created successfully!",
        project
    });
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    return res.status(200).json({
      count: projects.length,
      data: projects
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong while fetching projects.", error: error.message });
  }
};

const getProjectById = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        return res.status(200).json({ data: project });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}

const deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await Project.findByIdAndDelete(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        return res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};
export { createProject, getAllProjects, getProjectById, deleteProject };
