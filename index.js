import express from "express";
// const index = fs.readFileSync("index.html", "utf-8");
// Third Party middleware
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

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('DB Connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// Body Parser
server.use(cors())
server.use(express.json())
server.use(morgan('dev'))
server.use(express.static(process.env.PUBLIC_DIR))
// It gives us flexibility || Routes for products
server.use('/products',productRouter)
server.use('/users',userRouter)
server.use("*",(req,res)=>{
  res.sendFile(path.join(path.resolve(),'/dist/index.html'))
})

// MVC Model(Business rules)-View(View of the data)-Controller(Model and view ke beech mai joi bhi logic interchange ho rha hai wo controller krta hai)

server.listen(PORT, () => {
  console.log(`Server is listening at port:http://localhost:${PORT}`);
});
