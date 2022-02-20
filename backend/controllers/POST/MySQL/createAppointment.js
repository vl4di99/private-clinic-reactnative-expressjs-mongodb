exports.createAppointment = function(req, res) {
    var { patient, doctor, date, time } = req.body;
    mysqldb.query(
        "SELECT * from appointments WHERE (doctor = ? AND date = ? AND time = ?)",
        [doctor,date,time],
      function (error, result) {
        if (error) throw error;
        if(result.length > 0)
        {
            res.send("OCCUPIED");
            console.log("Slot is occupied");
            console.log(result);
        }
        else{
        mysqldb.query(
        "INSERT INTO appointments (patient, doctor, date, time) VALUES (?,?,?,?)",
        [patient, doctor, date, time],
        function(err,results){
            if (err) throw err;
            res.json(results);
        }
        )}
      }
    );
  };