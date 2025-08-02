import mongoose, { Mongoose } from "mongoose";


const connection={}
export default async function dbConnection() {
 if(connection.isConnected){
    console.log("Already connected to database")
 }
 try {
    const db=await mongoose.connect(process.env.MONGODB_URI || "")
    connection.isConnected=db.connections[0].readyState===1

    console.log("Database connected Successfully")
    
 } catch (error) {
    console.error(`Database connection error: `,error.message)
    
 }
}
