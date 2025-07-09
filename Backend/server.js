import express from "express";
import dotenv from "dotenv";
import queryRoutes from "./src/Routes/queryRoute.js";
import { connectDB } from "./src/Utils/dataBase.js";
import cors from "cors";

dotenv.config();
const app = express();

// Replace localhost with env variable for production deployment
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/query", queryRoutes);

// Connect to DB first, then start server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error("❌ Failed to connect to DB:", err);
});
