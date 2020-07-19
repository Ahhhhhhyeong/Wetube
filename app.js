import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handelListing = () =>{
    console.log(`Listening on: http://localhost:${PORT} `)
}

const handelHome = (req, res) => res.send('HI FROM HOME!');

const handelProfile = (req, res) => res.send("YOU ARE ON MY PROFILE"); //arrow function

const betweenHome = (req, res, next) => { 
    console.log("Between");
    next();
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/",  handelHome);


app.get("/profile", handelProfile);

app.listen(4000, handelListing);