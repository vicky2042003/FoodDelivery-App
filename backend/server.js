import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
//app config
const app=express()
const port=process.env.port||4000;

//middleware
app.use(express.json())
app.use(cors())

//db connections

connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("api working")

})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


//mongodb+srv://vickyy:yogesh2042003@cluster0.pbo701e.mongodb.net/?

//second time link
//mongodb+srv://ybangar20:yogesh2042003@cluster0.fn3mfcw.mongodb.net/?