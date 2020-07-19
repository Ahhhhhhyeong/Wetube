import app from "./app";


const PORT = 4000;


const handelListeng = () => 
    console.log(`Listing on: http://localhost: ${PORT}`);


app.listen(PORT, handelListeng);