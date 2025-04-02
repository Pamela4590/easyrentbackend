import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import mainRouter from './Routes/userRoute.js';
import bodyParser from 'body-parser';
import dotenv from "dotenv";

dotenv.config();

const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASS;
const port = process.env.PORT || 3000;

const app = express();
const corsOptions = {
  origin: "*", // Accept requests from any origin
  optionsSuccessStatus: 200,
  credentials: true, // Allow cookies & authentication headers
};


// Use CORS middleware with options
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/", mainRouter);

// Database connection
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
