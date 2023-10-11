const dotenv=require('dotenv').config()
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
require('colors')
//importing the BD config file
const connectDB=require('./db/config');

const app=express();

app.use(cors());
app.use(bodyParser.json());

//db Config
connectDB();

const port=process.env.PORT || 9876

app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Response form get request</h1>`)
})

app.listen(port,()=>{
    console.log(`Server started on the PORT:${port}`.bgMagenta);
});
