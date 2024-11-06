import express from 'express';
import dotenv from 'dotenv'; 


import {connectDB} from './config/db.js'; // Importing the database connection script. 123
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT =process.env.PORT || 5000 

app.use(express.json()) // allows us to accept JSON data in the req.body  

app.use("/api/products", productRoutes);




app.listen(PORT, () =>{
    connectDB();
    console.log("Server started at http://localhost:"+ PORT);
})