var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    console.log("hello")
    burger.selectAll(function(data){ 
        console.log(data)
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body)
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, "0"
    ], function(){
        res.redirect("/")
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(){
       res.redirect("/");
    });
});

// router.delete("/api/burgers/:id", function(req, res){
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function(){
//         res.redirect("/");
//     });
// });

module.exports = router;