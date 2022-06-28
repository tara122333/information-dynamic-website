
// require module section
const express = require("express"); // import express
const path = require("path"); // import path module
const hbs = require("hbs");  //import hbs

//set app
const app = express();
const Port = process.env.PORT || 3000;




//set path
const staticPath = path.join(__dirname,"../public");
const viewPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
// console.log(partialsPath); // check static path 

//use function
app.use(express.static(staticPath));



// set function
app.set("view engine","hbs");
app.set("views",viewPath);



// hbs operations
hbs.registerPartials(partialsPath);



//routing

//home page routing
app.get("/",(req,res)=>{
    // res.send("Hii I am Tara Chand");
    res.status(202).render("index");
});




//server starting or listen
app.listen(Port,(error)=>{
    if(error){
        console.log("Server listen error is : " + error);
    }
    else{
        console.log("server has been started at port : " + Port);
    }
});