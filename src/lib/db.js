import mongoose from "mongoose";


export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database is connected Sucessfully ${conn.connection.host} `);
        
    } catch (error) {
        console.log("eroor while connecting Database",error);
        process.exit(1)  
    }
}