import express from "express"
import { createUser, getAllUsers,getUser,replaceUser,updateUser,deleteUser } from '../controllers/users.mjs';

export const userRouter=express.Router()

// createUser is a routing function
// After removing Users from the methods we will not bound to these route. We can use same router for different routes
userRouter
  .post("/", createUser)
  .get("/", getAllUsers)
  .get("/:id", getUser)
  .put("/:id", replaceUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser)

// export default UserRouter;