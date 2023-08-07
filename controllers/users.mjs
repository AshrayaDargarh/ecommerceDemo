import fs from "fs";
import { User } from "../models/user.mjs";
export const createUser=async(req, res) => {
    const user= await User(req.body)
    try{
        const doc=await user.save()
        res.status(201).json(doc);
    }
    catch(err)
    {
        res.status(400).json(err)
    }
  }
  
export const getAllUsers=async(req, res) => {
    try{
        const users=await User.find()
        res.status(201).json(users);
    }
    catch(err)
    {
        res.status(400).json(err)
    }
}
  
export const getUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await User.findById({_id:id})
        res.status(201).json(doc);
    }
    catch(err)
    {
        res.status(400).json(err)
    }
  }
  
export const replaceUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await User.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }
    catch(err)
    {
        res.status(400).json(err)
    }
}
export const updateUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await User.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }
    catch(err)
    {
        res.status(400).json(err)
    }
}
  
export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await User.findOneAndDelete({_id:id})
        res.status(201).json(doc);
    }
    catch(err)
    {
        res.status(400).json(err)
    }
}
  
