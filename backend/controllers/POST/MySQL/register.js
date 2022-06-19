const bcrypt = require("bcrypt");

exports.register = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var fullname = req.body.fullname;
  var secret = req.body.secret;
  var saltRounds = 9;
  var ok = true;
  mysqldb.query(
    "SELECT * FROM registeredusers WHERE username = ?",
    [username],
    function (error, result) {
      if (result.length > 0) {
        ok = false;
        console.log("User already exists!");
        res.send(ok);
      } else {
        bcrypt.hash(password, saltRounds, (err, hashpass) => {
          if (err) {
            console.log("Error occured in hashing password: " + err);
          } else {
            bcrypt.hash(secret, saltRounds, (err, hashsecret) => {
              if (err) {
                console.log("Error occured in hashing secret: " + err);
              } else {
                mysqldb.query(
                  "INSERT INTO registeredusers (username,password,fullname,secret ) VALUES (?,?,?,?)",
                  [username, hashpass, fullname, hashsecret],
                  function (error, results) {
                    if (error) throw error;
                    res.json(results);
                    console.log("Inserted new user to database!");
                  }
                );
              }
            });
          }
        });
      }
    }
  );
};
