var express = require("express");

var router = express.Router();

var burgers = require("../models/burger");

// router.get("/", function(req, res){
//     burgers.all(function(data){
//         var hbsObject = {
//             burgers: data
//         }
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

router.post("/api/burgers", function(req, res){
    burgers.create([
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

    burgers.update({
        devoured: req.body.devoured
    }, condition, function(){
       res.redirect("/");
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burgers.delete(condition, function(){
        res.redirect("/");
    });
});

module.exports = router;