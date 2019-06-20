var orm = require('../config/orm.js'); // We require the ORM that we've made
// This is the object that we contain our commands from the ORM
var burger = {
    // The select all from the orm is here, along with a call back, and a reference to the table
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The insert one from the orm is here, along with a call back, and a reference to the table
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // The update one from the orm is here, along with a call back, and a reference to the table
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  // The delete from the orm is here, along with a call back, and a reference to the table
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }
};
// We export our model for later use
module.exports = burger;