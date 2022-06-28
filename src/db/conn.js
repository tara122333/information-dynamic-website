
// module required
const mongoose = require("mongoose");

// database connection
mongoose.connect('mongodb://localhost:27017/DynamicWebContact',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Data Base connection successfully");
}).catch((error)=>{
    console.log("Data Base not connected ");
    console.log("database connection error is : "+error);
});

// mongoose.connect  promisse me kuch return karta hai  to ya to promise pura kro ya tod do 
// promise successuful hone par then function execute hoga other wise catch for break promiss

