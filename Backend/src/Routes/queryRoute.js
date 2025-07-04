import express from "express";
import  {saveQuery}  from "../Controllers/saveQuery.js";
const router = express.Router();

router.post("/saveQuery",saveQuery);
export default router;