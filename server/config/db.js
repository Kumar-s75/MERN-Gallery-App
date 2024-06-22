import mongoose from "mongoose";

const connectToMongo= async ()=>{
   
    const res=await mongoose.connect("mongodb+srv://kumarsaurabh27d:4JzQ2N1Sp48vpdtO@cluster1.xmtolsc.mongodb.net/");
    if(res){
        console.log("connected successfully");
    }
};


export default connectToMongo;
