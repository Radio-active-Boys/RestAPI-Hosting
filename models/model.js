const mongoose = require("mongoose");

// we need to create a Schema {Structure of documents}

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    isFeatured: {
      type: Boolean,
      required: true
    },
    features: {
      type: [String],
      required: true
    }
  });
  

module.exports = mongoose.model('phoneCompany',productSchema);