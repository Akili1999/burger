var mysql = require("mysql"); // We require the extension of mysql
// We use mysql to create a connection to local host on mysql port 3306
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ipod115s",
  database: "burgers_db"
});
// We throw an error if the connection fails, or log the id of the connection if the connection is successful
connection.connect(function(err){
    if(err){
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// We export the connection for later use
module.exports = connection;