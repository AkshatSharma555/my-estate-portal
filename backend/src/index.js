import config from './config/index.js'; // Nayi config import karo
import connectDB from "./db/index.js";
import { app } from './app.js';

const PORT = config.PORT;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`⚙️  Server is running at port : ${PORT}`);
    });
    app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error;
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});