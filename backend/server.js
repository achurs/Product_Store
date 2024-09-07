import express from 'express';
import {connectDB} from './config/db.js';
const app = express();

app.get("/",(req,res)=>{
    res.send("Server is ready!!");
})
app.post("/products",(req,res)=>{
    //doing
});
app.listen(5000,()=>{
    connectDB();
    console.log('server started at http://locahost:5000');
});
