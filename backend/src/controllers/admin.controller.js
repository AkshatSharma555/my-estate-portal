// src/controllers/admin.controller.js
import { Admin } from "../models/admin.model.js";

const registerAdmin = async (req, res) => {
    const { username, password, secretKey } = req.body;

    // Secret Key ko check karo
    if (secretKey !== process.env.ADMIN_REGISTRATION_SECRET) {
        return res.status(403).json({ message: "Invalid secret key. Admin registration not allowed." });
    }

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    // Check karo ki database me pehle se koi admin toh nahi hai (optional, but good for first user)
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
        // Hum sirf pehle admin ko is tareeke se banane denge
        // return res.status(403).json({ message: "An admin already exists. Further registrations are disabled." });
    }

    const existedAdmin = await Admin.findOne({ username });
    if (existedAdmin) {
        return res.status(409).json({ message: "Admin with this username already exists." });
    }

    const admin = await Admin.create({ username, password });
    const createdAdmin = await Admin.findById(admin._id).select("-password");

    if (!createdAdmin) {
        return res.status(500).json({ message: "Something went wrong." });
    }

    return res.status(201).json({ message: "Admin registered successfully", admin: createdAdmin });
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

const changeCurrentPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    const admin = await Admin.findById(req.admin._id);

    const isPasswordCorrect = await admin.isPasswordCorrect(oldPassword);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid old password" });
    }

    admin.password = newPassword;
    await admin.save({ validateBeforeSave: false });

    return res.status(200).json({ message: "Password changed successfully" });
};


export { registerAdmin, loginAdmin, changeCurrentPassword };