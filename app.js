import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter }  from "./router";
const app = express();

const handelHome = (req, res) => res.send('HI FROM HOME!');

const handelProfile = (req, res) => res.send("YOU ARE ON MY PROFILE"); //arrow function

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/",  handelHome);

app.get("/profile", handelProfile);
app.use("/user", userRouter);

export default app; //누군가 import 할 때 default
