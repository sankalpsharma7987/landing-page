const express = require('express');
const app = express();
const port = process.env.PORT;

const publicDirectory = './src/client'
app.use(express.static(publicDirectory));

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})