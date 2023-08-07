import express from "express"
import { createProduct, getAllProducts,getProduct,replaceProduct,updateProduct,deleteProduct } from '../controllers/product.mjs';

export const productRouter=express.Router()

productRouter
  .post("/", createProduct)
  .get("/", getAllProducts)
  .get("/:id", getProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct)
