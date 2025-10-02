// src/controllers/admin.controller.js
import { Admin } from "../models/admin.model.js";

const registerAdmin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    const existedAdmin = await Admin.findOne({ username });

    if (existedAdmin) {
        return res.status(409).json({ message: "Admin with this username already exists." });
    }

    const admin = await Admin.create({
        username,
        password
    });

    const createdAdmin = await Admin.findById(admin._id).select("-password");

    if (!createdAdmin) {
        return res.status(500).json({ message: "Something went wrong while registering the admin." });
    }

    return res.status(201).json({
        message: "Admin registered successfully",
        admin: createdAdmin
    });
};

const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    const admin = await Admin.findOne({ username });

    if (!admin) {
        return res.status(404).json({ message: "Admin does not exist." });
    }

    const isPasswordValid = await admin.isPasswordCorrect(password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid admin credentials." });
    }

    const accessToken = admin.generateAccessToken();

    const loggedInAdmin = await Admin.findById(admin._id).select("-password");

    return res.status(200).json({
        message: "Admin logged in successfully",
        admin: loggedInAdmin,
        accessToken
    });
};

export { registerAdmin, loginAdmin };