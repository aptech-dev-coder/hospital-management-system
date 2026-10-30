import mongoose from "mongoose";


const SnackSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

export const Snacks = mongoose.model('snack',SnackSchema)
