import mongoose from "mongoose";

export async function ConectDb() {
    try {
        const mongodb =process.env.MONGOURI
        if(!mongodb){
            throw new Error("Mongo Url not valid");
        }
        await mongoose.connect(mongodb);
        console.log('MongoDB Connected!')
         
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}