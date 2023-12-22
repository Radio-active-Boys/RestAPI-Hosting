require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const route = require("./routes/product.js");

const connectDB = require("./DB/connect.js");



// middleware to set with our router 
app.use("/api/products",route);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} here is port`);
        });
    } catch (error) {
        console.log(error);
    }
} 

start();
