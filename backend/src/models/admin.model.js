// src/models/admin.model.js
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/index.js"

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: true });

adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

adminSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
};

adminSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        { _id: this._id, username: this.username },
        config.ACCESS_TOKEN_SECRET, 
        { expiresIn: config.ACCESS_TOKEN_EXPIRY } 
    );
};

export const Admin = mongoose.model("Admin", adminSchema);