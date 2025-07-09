import express from "express";
import dotenv from "dotenv";
import queryRoutes from "./src/Routes/queryRoute.js";
import { connectDB } from "./src/Utils/dataBase.js";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration (use frontend URL from env)
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/query", queryRoutes);

// Define PORT
const PORT = process.env.PORT || 3000;

// Connect DB, then start server (important for Render)
connectDB().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`✅ Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error("❌ Failed to connect to DB:", err);
});
