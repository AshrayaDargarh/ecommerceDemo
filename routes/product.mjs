import express from "express"
import { createProduct, getAllProducts,getProduct,replaceProduct,updateProduct,deleteProduct } from '../controllers/product.mjs';

export const productRouter=express.Router()

// createProduct is a routing function
// After removing products from the methods we will not bound to these route. We can use same router for different routes
productRouter
  .post("/", createProduct)
  .get("/", getAllProducts)
  .get("/:id", getProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct)

// export default productRouter;