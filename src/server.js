import express from "express"
import cors from "cors"
import  "dotenv/config";
import authRoutes from "./routes/authRoutes.js"
import { connectDB } from "./lib/db.js";
import bookRoutes from "./routes/bookRoutes.js"
import job from "./lib/cron.js";

const app = express();
const Port = process.env.PORT || 5000;

app.get("/",async(req,res)=>{
    res.status(200).json({ message: "Api is working" })
})

job.start()
app.use(express.json());
app.use(cors())

app.use("/api/auth",authRoutes)
app.use("/api/books",bookRoutes)


app.listen(Port,()=>{
    console.log("Server is running on Port :",Port);
    connectDB();
    
})