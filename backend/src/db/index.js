import mongoose from "mongoose";
import config from '../config/index.js'; // Nayi config import karo

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${config.MONGO_URI}/jmm_homes`);
        console.log(`\n MongoDB Connected !! DB HOST: ${conn.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED: ", error);
        process.exit(1);
    }
};

export default connectDB;