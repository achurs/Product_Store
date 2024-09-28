import express from 'express';
import {connectDB} from './config/db.js';
import productRoute from './routes/product.route.js';
import path from 'path';

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/dist')));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'));
    })
}

app.use('/api/products',productRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log('server started at http://locahost:5000');
});
