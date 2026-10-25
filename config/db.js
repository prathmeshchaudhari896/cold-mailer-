import dns from 'dns';
dotenv.config();

dns.setServers(['8.8.8.8', '1.1.1.1']);

import mongoose from 'mongoose';  
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected`);
    }
    catch(e){
        console.log(e.message);
    }
};

export default connectDB;