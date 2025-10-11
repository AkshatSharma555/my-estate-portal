// src/controllers/inquiry.controller.js
import { Inquiry } from "../models/inquiry.model.js";

const createInquiry = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

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
        
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            const errorMessage = messages.join(' ');
            return res.status(400).json({ message: errorMessage });
        }
        
        console.error("Error while creating inquiry:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAllInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });

        return res.status(200).json({
            count: inquiries.length,
            data: inquiries
        });
    } catch (error) {
        console.error("Error while fetching inquiries:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
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
        console.error("Error while deleting inquiry:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export { createInquiry, getAllInquiries, deleteInquiry };