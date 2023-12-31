import { Product } from "../models/product.mjs";
export const createProduct=async (req, res) => {
    const product=new Product(req.body);
    try{
        const doc= await product.save()
        res.status(200).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }
  }
  
export const getAllProducts=async(req, res) => {
    try{
        const products= await Product.find()
        res.json(products);
    }
    catch(err)
    {
        res.json(err);
    }
    
}
  
export const getProduct=async (req,res)=>{
    const id=req.params.id;
    console.log(id)
    try{
        const product=await Product.findById({_id:id})
        console.log(product)
        res.json(product)
    }
    catch(err)
    {
        console.log(err)
    }
    
  }
export const replaceProduct=async(req,res)=>{
    const id=req.params.id;
    try
    {
        const doc=await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc)
    }
    catch(err)
    {
        res.status(400).json(err)
    }
    
}
export const updateProduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const product =await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(product)
    }
    catch(err)
    {
        res.status(400).json(err)
    }
}
  
export const deleteProduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const deleteRes=await Product.findOneAndDelete({_id:id})
        res.status(201).json(deleteRes);
    }
    catch(err)
    {
        res.status(400).json(deleteProduct)
    }
    
}
  
