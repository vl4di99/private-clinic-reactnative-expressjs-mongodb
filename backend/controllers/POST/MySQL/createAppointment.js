exports.createAppointment = function (req, res) {
  var { patient, doctor, date, time, department } = req.body;
  var starthour,
    endhour = "";
  mysqldb.query(
    "SELECT start_work_hour, end_work_hour FROM registereddoctors WHERE (fullname=? AND department=?)",
    [doctor, department],
    function (error, result) {
      if (error) throw error;
      //console.log(result);
      if (result.length > 0) {
        starthour = result[0].start_work_hour;
        endhour = result[0].end_work_hour;
        //console.log(starthour, endhour);
        if (starthour != "" && endhour !== "") {
          if (time >= starthour && time <= endhour) {
            mysqldb.query(
              "SELECT * from appointments WHERE (doctor = ? AND date = ? AND time = ? AND department = ?)",
              [doctor, date, time, department],
              function (error, result) {
                if (error) throw error;
                if (result.length > 0) {
                  res.send("OCCUPIED");
                  console.log("Slot is occupied");
                  console.log(result);
                } else {
                  mysqldb.query(
                    "INSERT INTO appointments (patient, doctor, date, time, department) VALUES (?,?,?,?,?)",
                    [patient, doctor, date, time, department],
                    function (err, results) {
                      if (err) throw err;
                      res.json("Appointment created successfully");
                    }
                  );
                }
              }
            );
          } else {
            res.send(
              "The doctor is not working at this hour. Please select another hour."
            );
            return;
          }
        } else {
          res.send(404);
        }
      }
    }
  );
};
