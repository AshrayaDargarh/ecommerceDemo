import mongoose from "mongoose";
import validator from 'validator';
const {Schema}=mongoose
const addressSchema = new Schema({
  pincode: { type: Number, required: true },
  street: { type: String, required: true },
  phone: { type: String, required: true, minLength:10,maxLength:10},
});
const userSchema=new Schema({
    firstName:{type: String,required:true, minLength:[1,"Cant't less than one character"],maxLength:[16,"Cant't more than 16 character"]},
    lastName:{type: String,max:[16,"Cant't more than 16 character"]},
    age:{type: Number,required:true, min:[12,"You are not eligible"],max:[100,"Cant't more than 100 character"]},
    email:{
      type:String ,
      validate:[validator.isEmail,'invalid email'],
      unique:true
    },
    address:addressSchema
})
export const User= mongoose.model("User",userSchema)