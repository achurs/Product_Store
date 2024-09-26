import express from 'express';
import {connectDB} from './config/db.js';
import productRoute from './routes/product.route.js';

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body

const PORT = process.env.PORT || 5000;

app.use('/api/products',productRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log('server started at http://locahost:5000');
});
