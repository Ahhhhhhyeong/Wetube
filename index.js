import express from "express";
const app = express();

const PORT = 4000;

const handelListing = () =>{
    console.log(`Listening on: http://localhost:${PORT} `)
}

const handelHome = (req, res) => res.send('HI FROM HOME!');

const handelProfile = (req, res) => res.send("YOU ARE ON MY PROFILE"); //arrow function

app.get("/", handelHome);

app.get("/profile", handelProfile);

app.listen(4000, handelListing);