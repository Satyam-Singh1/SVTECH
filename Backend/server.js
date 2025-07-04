import express from "express";
import dotenv from "dotenv";
import queryRoutes from "./src/Routes/queryRoute.js"
import { connectDB } from "./src/Utils/dataBase.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    credentials:true
}))

const PORT = process.env.PORT || 3000;


app.use("/api/query",queryRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});