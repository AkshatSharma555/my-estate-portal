// src/models/inquiry.model.js
import mongoose, { Schema } from "mongoose";
import dns from 'dns';
import util from 'util';

const resolveMx = util.promisify(dns.resolveMx);

const inquirySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        trim: true,
        match: [/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        trim: true,
        lowercase: true,
        validate: [
            {
                async validator(email) {
                    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if (!emailRegex.test(email)) {
                        return false;
                    }
                    const domain = email.substring(email.lastIndexOf("@") + 1);
                    try {
                        const records = await resolveMx(domain);
                        return records && records.length > 0;
                    } catch (error) {
                        return false;
                    }
                },
                message: 'Please enter a valid email address.'
            }
        ]
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        required: [true, 'Message is required.'],
    },
    isRead: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

export const Inquiry = mongoose.model("Inquiry", inquirySchema);