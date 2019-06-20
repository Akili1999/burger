var connection = require('../config/connection.js'); // Here we are requiring our connection javascript file

// This function helps with question mark syntax for mysql
function printQuestionMarks(num) {
  var arr = [];
 for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}
// This function helps with conversions for my sql
function objToSql(ob) {

  var arr = [];
  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      arr.push(key + '=' + ob[key]);
    }
  }
  return arr.toString();
}

// This is our orm for the app
var orm = {
    // This is for selecting the objects from our table
  selectAll: function (table, callback) {
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

   // This is for inserting new objects into our table
  insertOne: function (table, cols, vals, callback) {
    var queryString = 'INSERT INTO ' + table;

    queryString = queryString + ' (';
    queryString = queryString + cols.toString();
    queryString = queryString + ') ';
    queryString = queryString + 'VALUES (';
    queryString = queryString + printQuestionMarks(vals.length);
    queryString = queryString + ') ';

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
    // This is for updating objects into our table
  updateOne: function (table, objColVals, condition, callback) {
    var queryString = 'UPDATE ' + table;

    queryString = queryString + ' SET ';
    queryString = queryString + objToSql(objColVals);
    queryString = queryString + ' WHERE ';
    queryString = queryString + condition;

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // This allows us to delete things from our table
  delete: function (table, condition, callback) {
    var queryString = 'DELETE FROM ' + table;
    queryString = queryString + ' WHERE ';
    queryString = queryString + condition;

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};
// We export the ORM for later use
module.exports = orm;