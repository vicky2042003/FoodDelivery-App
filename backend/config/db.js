import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://ybangar20:yogesh2042003@cluster0.fn3mfcw.mongodb.net/food-del').then(()=>console.log("db connected"));
}