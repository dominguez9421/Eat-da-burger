const express = require("express");


const router = express.Router();
const burger = require("../models/burger.js"); 

//async?
router.get("/", function (req, res){
    res.redirect("/burgers"); 
}); 

module.exports = router; 