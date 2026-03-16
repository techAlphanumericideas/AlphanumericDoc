import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        required:true
    },
    createDA:{
        type:Date,
        default:Date.now,
    }
})
export default  mongoose.models.User || mongoose.model('User',UserSchema);