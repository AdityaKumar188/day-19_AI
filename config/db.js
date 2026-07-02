const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected");
    }
    catch(err)
    {
        console.log("Unable to Connect Database",err);
    }
};

module.exports=connectDB;