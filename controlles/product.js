// we already coonected eith database with in the app.ja itself as we starting the code we declare it to coonect with database
// now we are going to coonect with its specific collectiom define wiithin the model
const Product = require("../models/model.js")
const getProduct = async(req,res) => {
    const { name, price, isFeatured,features,sort,select} = req.query;
    const queryObject = {};
   
    if (name) {
        queryObject.name = {$regex:name , $options: "i" }; //  im looking for a string in name field it field value part can also match 
      }
  
    if (price) {
      queryObject.price =  parseInt(price); // Convert to integer
    }
    
      
    if (isFeatured !== undefined) {
      queryObject.isFeatured = isFeatured.toLowerCase() === "true"; // Convert to boolean
    }
    if (features) {
        queryObject.features = { $in: [`company: ${features}`] }; // Match documents with at least one feature from the specified list
      }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.split(",").join(" ");          
        apiData = apiData.sort(sortFix);
    }

    if(select){
        // let selectFix = select.replace(","," "); 
        let selectFix = select.split(",").join(" ");         
        apiData = apiData.select(selectFix);
    }
     // Pagination
     let Page = Number(req.query.page)||1;
     let Limit = Number(req.query.limit)||10;
     let skip = (Page -1) * Limit;
     apiData = apiData.skip(skip).limit(Limit);
 
     console.log(queryObject);
     const getData =  await apiData;
     res.status(200).json({getData , nbHits:getData.length});
   
};

const getProductTesting = async(req,res) => {
    //request query paste the same data in same field not random you have to field specific
    const { name, price, isFeatured,features,sort,select} = req.query;
    const queryObject = {};
   
    if (name) {
        queryObject.name = {$regex:name , $options: "i" }; //  im looking for a string in name field it field value part can also match 
      }
  
    if (price) {
      queryObject.price =  parseInt(price); // Convert to integer
    }
    
      
    if (isFeatured !== undefined) {
      queryObject.isFeatured = isFeatured.toLowerCase() === "true"; // Convert to boolean
    }
    if (features) {
        queryObject.features = { $in: [`company: ${features}`] }; // Match documents with at least one feature from the specified list
      }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.split(",").join(" ");          
        apiData = apiData.sort(sortFix);
    }

    if(select){
        // let selectFix = select.replace(","," "); 
        let selectFix = select.split(",").join(" ");         
        apiData = apiData.select(selectFix);
    }
     // Pagination
     let Page = Number(req.query.page)||1;
     let Limit = Number(req.query.limit)||10;
     let skip = (Page -1) * Limit;
     apiData = apiData.skip(skip).limit(Limit);
 
     console.log(queryObject);
     const getData =  await apiData;
     res.status(200).json({getData , nbHits:getData.length});
   
};

module.exports = {getProduct,getProductTesting};




// Model()
// Model.$where()
// Model.aggregate()
// Model.applyDefaults()
// Model.bulkSave()
// Model.bulkWrite()
// Model.castObject()
// Model.cleanIndexes()
// Model.countDocuments()
// Model.create()
// Model.createCollection()
// Model.createIndexes()
// Model.db
// Model.deleteMany()
// Model.deleteOne()
// Model.diffIndexes()
// Model.discriminator()
// Model.distinct()
// Model.ensureIndexes()
// Model.estimatedDocumentCount()
// Model.events
// Model.exists()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.hydrate()
// Model.init()
// Model.insertMany()
// Model.inspect()
// Model.listIndexes()
// Model.populate()
// Model.prototype.$model()
// Model.prototype.$where
// Model.prototype.base
// Model.prototype.baseModelName
// Model.prototype.collection
// Model.prototype.collection
// Model.prototype.db
// Model.prototype.deleteOne()
// Model.prototype.discriminators
// Model.prototype.increment()
// Model.prototype.model()
// Model.prototype.modelName
// Model.prototype.save()
// Model.replaceOne()
// Model.schema
// Model.startSession()
// Model.syncIndexes()
// Model.translateAliases()
// Model.updateMany()
// Model.updateOne()
// Model.validate()
// Model.watch()
// Model.where()


// Example:
// // find all documents
// await MyModel.find({});

// // find all documents named john and at least 18
// await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();

// // executes, name LIKE john and only selecting the "name" and "friends" fields
// await MyModel.find({ name: /john/i }, 'name friends').exec();

// // passing options
// await MyModel.find({ name: /john/i }, null, { skip: 10 }).exec();
