import e from "express";
import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
   name:{
    type: String,
    required: true,
    trim: true
   },
   email: {
    type: String,
    required: true,
    trim: true
   },
    message: {
    type: String,
    required: true,
    trim: true
   },
},{timestamps: true});

const Query = mongoose.model("Query", querySchema);
export default Query;