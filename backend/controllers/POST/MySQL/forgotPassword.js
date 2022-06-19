const bcrypt = require("bcrypt");
const mysqldb = require("../../../database").connection;

exports.forgotPasswordPatient = function (req, res) {
  var username = req.body.username;
  var secret = req.body.secret;
  var new_password = req.body.password;
  var saltRounds = 9;

  mysqldb.query(
    "SELECT * FROM registeredusers WHERE username = ?;",
    username,
    function (error, result) {
      if (error) {
        res.send(error);
      }

      if (result.length > 0) {
        bcrypt.compare(secret, result[0].secret, (error, response) => {
          if (response) {
            bcrypt.hash(new_password, saltRounds, (err, hash) => {
              if (err) {
                console.log("Error occured in hashing password: " + err);
              } else {
                mysqldb.query(
                  "UPDATE registeredusers SET password = ? WHERE username = ?",
                  [hash, username],
                  function (error, results) {
                    if (error) throw error;
                    res.json("Password updated successfully");
                  }
                );
              }
            });
          } else {
            res.send({ message: "Incorrect password" });
          }
        });
      } else {
        res.send({ message: "Invalid username/password" });
      }
    }
  );
};

exports.forgotPasswordDoctor = function (req, res) {
  var username = req.body.username;
  var secret = req.body.secret;
  var new_password = req.body.password;
  var saltRounds = 9;

  mysqldb.query(
    "SELECT * FROM registereddoctors WHERE username = ?;",
    username,
    function (error, result) {
      if (error) {
        res.send(error);
      }

      if (result.length > 0) {
        bcrypt.compare(secret, result[0].secret, (error, response) => {
          if (response) {
            bcrypt.hash(new_password, saltRounds, (err, hash) => {
              if (err) {
                console.log("Error occured in hashing password: " + err);
              } else {
                mysqldb.query(
                  "UPDATE registereddoctors SET password = ? WHERE username = ?",
                  [hash, username],
                  function (error, results) {
                    if (error) throw error;
                    res.json("Password updated successfully");
                  }
                );
              }
            });
          } else {
            res.send({ message: "Incorrect password" });
          }
        });
      } else {
        res.send({ message: "Invalid username/password" });
      }
    }
  );
};
