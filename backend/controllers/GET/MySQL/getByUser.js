exports.getByUser = function(req, res) {
    var username = req.body.username;
    mysqldb.query(
      "SELECT * FROM registeredusers WHERE username = ?",
      [username],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  };