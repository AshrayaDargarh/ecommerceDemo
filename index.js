import express from "express";
import morgan from "morgan";
import dotenv from "dotenv"
dotenv.config();
import {productRouter} from './routes/product.mjs'
import { userRouter } from "./routes/users.mjs";
import mongoose from "mongoose"
import cors from 'cors'
import path from "path";
const PORT = process.env.PORT_URL|| 4000;
const server = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('DB Connected')
}

server.use(cors())
server.use(express.json())
server.use(morgan('dev'))
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/products',productRouter)
server.use('/users',userRouter)
server.use("*",(req,res)=>{
  res.sendFile(path.join(path.resolve(),'/dist/index.html'))
})

server.listen(PORT, () => {
  console.log(`Server is listening at port:http://localhost:${PORT}`);
});
