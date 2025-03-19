import express from "express";
import { Login,Register } from "../Controllers/useController.js";

const userRouter=express();
userRouter.post("/login",Login);
userRouter.post("/register",Register);

export default userRouter;