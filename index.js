const express = require('express');
const app = express();

const PORT = 4000;

function handelListing(){
    console.log(`Listening on: http://localhost:${PORT} `)
}

app.listen(4000, handelListing);