const express = require('express');
const path = require('path');

const port = 3001;

const app = express();

const publicDirectory = './client';
app.use(express.static(publicDirectory));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})
