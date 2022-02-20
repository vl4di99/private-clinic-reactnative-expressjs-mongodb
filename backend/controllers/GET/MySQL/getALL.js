exports.getALL = function (req, res){
    mysqldb.query("SELECT * FROM registeredusers", (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  };