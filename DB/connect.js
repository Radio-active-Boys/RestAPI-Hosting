const mongoose = require("mongoose");
require("dotenv").config();



const connectDB = (uri) =>{
    console.log("connect db");
    return mongoose.connect(uri);
};

module.exports = connectDB;