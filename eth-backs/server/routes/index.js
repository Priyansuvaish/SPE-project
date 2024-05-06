const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

<<<<<<< HEAD
//const contractAPIRoutes = require("./contract-API");
=======
const contractAPIRoutes = require("./contract-API");
>>>>>>> 6eb910aa (updated-eth-back)
const smartContractAPIRoutes = require("./smart-contract-API");

const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        limit:"50mb",
        extended:false,
        parameterLimit:50000    
    })
);

// use the routes specified in route folder
<<<<<<< HEAD
//app.use("/", contractAPIRoutes);
=======
app.use("/", contractAPIRoutes);
>>>>>>> 6eb910aa (updated-eth-back)
app.use("/",smartContractAPIRoutes);

app.use(function(err, req,res, next){
    res.status(422).send({error: err.message});
});

<<<<<<< HEAD
//listen to the server
app.listen( port, function(){
    console.log(`Listening to the port ${port} .....`);
});
=======

app.listen( port, function(){
    console.log(`Listening to the port ${port} .....`);
});
>>>>>>> 6eb910aa (updated-eth-back)
