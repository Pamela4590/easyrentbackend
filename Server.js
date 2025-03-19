import express from 'express';
import mongoose from 'mongoose';
import mainRouter from './Routes/userRoute.js';
import bodyParser from 'body-parser';
import dotenv from "dotenv"

dotenv.config();
const db_user= process.env.DB_USER;
const db_name= process.env.DB_NAME;
const db_pass= process.env.DB_PASS;
const port= process.env.PORT||3000;

const app=express();
app.use(bodyParser.json());
app.use("/",mainRouter);
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('this is my first project of node js')
// })
// const PORT=5001;   
// app.listen(PORT,()=>{
// console.log(`the app is running on the port ${PORT}`);

// }
    
// )

const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.a9i1l.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
     
    });
  })
  .catch((error) => {
    console.log(error);
  });
