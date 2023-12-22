require("dotenv").config();

// Connection of database with moongose
const connectDB = require("./DB/connect.js");

// Model of collection with mongoose
const Product = require("./models/model.js");

// json need no export can be asign to variable easily
const jsonData = require("./api.json");

const start = async() => {
    try {
        // connnecting to database using moongoose.connect(uri)
        await connectDB(process.env.MONGODB_URI);
        // import data in collection of database
        await Product.create(jsonData);
        console.log("Sucess");
    } catch (error) {
        console.log(error);
    }
}
start();