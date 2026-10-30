import { Snacks } from "../models/snacks.model.js"

export const addNewSnack = async (req,res) =>{
    const newSnackk = await Snacks.insertOne(req.body) 
    res.json({message:"created",newSnackk })
}
export const getSnack = async (req,res)=>{
    const snacks = await Snacks.find();
    res.json({snacks})
}

export const getSingleSnack = async(req,res)=>{
    const snack =  req.params // {id :ewioeuwoieu}
    const singleSnack = await Snacks.find({_id : snack.snackId})
    res.json({singleSnack})
}
export const deleteSnack = async (req,res)=>{
    const {id} =  req.params
    await Snacks.deleteOne({_id:id})
    res.json({message:"snack deleted"})
}
export const updateSnack = async (req,res) =>{
    const {id} =  req.params
    const body = req.body
    const updatedSnack = await Snacks.findByIdAndUpdate(id,body,{new:true})
    res.json(updateSnack);
}