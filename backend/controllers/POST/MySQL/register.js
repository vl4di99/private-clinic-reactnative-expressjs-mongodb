const bcrypt = require("bcrypt");

exports.register = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var fullname = req.body.fullname;
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
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log("Error occured in hashing password: " + err);
          } else {
            mysqldb.query(
              "INSERT INTO registeredusers (username,password,fullname ) VALUES (?,?,?)",
              [username, hash, fullname],
              function (error, results) {
                if (error) throw error;
                res.json(results);
                console.log("Inserted new user to database!");
              }
            );
          }
        });
      }
    }
  );
};
