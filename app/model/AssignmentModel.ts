import mongoose from "mongoose";


const Assignments = new mongoose.Schema({

    title:String,

    discripstion:String,
    
    userEmail:String,

    dueDate:Date,

    status:{
        type:String,
        default:"pending"
    }

});

export default mongoose.models.Assignments || mongoose.model('Assignments',Assignments);