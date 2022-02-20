const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "privateclinic",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Connected successfully!");
  }
});

module.exports = { connection };
