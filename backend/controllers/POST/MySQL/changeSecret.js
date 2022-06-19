const bcrypt = require("bcrypt");
const mysqldb = require("../../../database").connection;

exports.changeSecretDoctor = function (req, res) {
  var username = req.body.username;
  var secret = req.body.secret;
  var newsecret = req.body.newsecret;
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
            bcrypt.hash(newsecret, saltRounds, (err, hash) => {
              if (err) {
                console.log("Error occured in hashing secret: " + err);
              } else {
                mysqldb.query(
                  "UPDATE registereddoctors SET secret = ? WHERE username = ?",
                  [hash, username],
                  function (error, results) {
                    if (error) throw error;
                    res.json("Secret updated successfully");
                  }
                );
              }
            });
          } else {
            res.send({ message: "Incorrect Secret" });
          }
        });
      } else {
        res.send({ message: "Invalid username/password" });
      }
    }
  );
};
