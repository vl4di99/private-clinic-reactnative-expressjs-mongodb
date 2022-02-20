const bcrypt = require('bcrypt');
const mysqldb = require('../../../database').connection;

exports.login = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
  
    mysqldb.query(
      "SELECT * FROM registeredusers WHERE username = ?;",
      username,
      function (error, result) {
        if (error) {
          res.send(error);
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result[0]);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          });
        } else {
          res.send({ message: "Invalid username/password" });
        }
      }
    );
  };