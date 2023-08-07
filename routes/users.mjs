import express from "express"
import { createUser, getAllUsers,getUser,replaceUser,updateUser,deleteUser } from '../controllers/users.mjs';

export const userRouter=express.Router()

userRouter
  .post("/", createUser)
  .get("/", getAllUsers)
  .get("/:id", getUser)
  .put("/:id", replaceUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser)
