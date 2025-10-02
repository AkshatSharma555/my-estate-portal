// src/models/inquiry.model.js
import mongoose, { Schema } from "mongoose";

const inquirySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

export const Inquiry = mongoose.model("Inquiry", inquirySchema);