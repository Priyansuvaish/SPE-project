const express = require("express");
const router = express.Router();
const compile = require("../../Fake-prodcut-identification-smart-contract/scripts/compile");
const deploy = require("../../Fake-prodcut-identification-smart-contract/scripts/deploy");

// Compile the contract
router.post("/compile", async function(req, res, next) {
    const result = compile();
    res.send(result); 
});

// Deploy the contract
router.post("/deploy", async function(req, res, next) {
    const result = await deploy("Hello World!");
    res.send(JSON.parse(result).address); 
});

module.exports = router;