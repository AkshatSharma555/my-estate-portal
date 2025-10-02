// src/controllers/inquiry.controller.js
import { Inquiry } from "../models/inquiry.model.js";

const createInquiry = async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required." });
    }

    const inquiry = await Inquiry.create({
        name,
        email,
        phone,
        message
    });

    return res.status(201).json({ 
        message: "Inquiry submitted successfully. We will get back to you soon!",
        inquiry 
    });
};

const getAllInquiries = async (req, res) => {
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
        count: inquiries.length,
        data: inquiries
    });
};

const deleteInquiry = async (req, res) => {
    try {
        const { inquiryId } = req.params;
        const inquiry = await Inquiry.findByIdAndDelete(inquiryId);
        if (!inquiry) {
            return res.status(404).json({ message: "Inquiry not found" });
        }
        return res.status(200).json({ message: "Inquiry deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export { createInquiry, getAllInquiries ,deleteInquiry};