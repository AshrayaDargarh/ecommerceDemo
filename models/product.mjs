import mongoose from "mongoose";
const { Schema } = mongoose;
// Schema
const productSchema = new Schema({
  title: {type: String,required: true, unique:true},
  description: {type: String},
  price: {type: Number,required: true,min: [0, "Wrong Price"]},
  discountPercentage: { type: Number,min: [0, "wrong min discount"],max: [50, "wrong max discount"]},
  rating: {type: Number,min: [0, "wrong min rating"], max: [5, "wrong max rating"],default:0},
  brand: {type: String,required: true},
  category: {type:String,required: true},
  thumbnail: {type: String,required: true},
  images: [String],
});
// Product is for collection
export const Product = mongoose.model("Product", productSchema);
