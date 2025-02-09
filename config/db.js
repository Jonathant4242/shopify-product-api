const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
// The connectDB function connects to the MongoDB database using the MONGO_URI environment variable. If the connection is successful, it logs "MongoDB Connected" to the console. If there is an error, it logs "MongoDB Connection Failed" along with the error message and exits the process with code 1.