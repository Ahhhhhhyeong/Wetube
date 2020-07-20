import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("USERS"));


export default userRouter;

/*
Model data
View how does the data look
funCtion that looks for the data
*/