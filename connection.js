var mysql = require("mysql");
var util = require("util");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "taylor123!",
  database: "tracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
});

connection.query = util.promisify(connection.query);
module.exports = connection;