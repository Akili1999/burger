// Here we require the npm extension "express"
var express = require('express');
// Here we establish an express router
var router = express.Router();
// Here we require our burger model that we made
var burger = require('../models/burger.js');
// This router redirects to the burgers table
router.get("/", function(req, res){
  res.redirect("/burgers")
});
// selecting the table
router.get('/burgers', function (req, res) {

  burger.selectAll(function (data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});
// This router posts our information that we put in for burger_name then ensures devoured is false
router.post('/burgers/insertOne', function (req, res) {
  burger.insertOne(['burger_name', 'devoured'], 
  [req.body.burger_name, false], function () {
    res.redirect('/burgers');
  });
});
// This allows us to update the devoured status
router.put('/burgers/updateOne/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/burgers');
  });
});
// This allows us to delete a burger after we have devoured it
router.delete('/burgers/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  burger.delete(condition, function () {
    res.redirect('/burgers');
  });
});
// We export the router for later use
module.exports = router;