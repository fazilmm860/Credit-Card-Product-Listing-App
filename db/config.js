const mongoose= require('mongoose')
require('colors')

// DB Connection

const connectDB= async ()=>{
    try{
            const conn=await mongoose.connect(process.env.MONGO_URI);
            console.log(`MongoDB Connected`.bgCyan);
    }catch(error){
            console.log(`MongoDB Connection Error:${error}`.bgRed);
            process.exit(1)
    }
};

//export it 
module.exports=connectDB;