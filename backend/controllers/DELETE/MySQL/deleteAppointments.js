exports.deleteSingleAppointment = function (req, res) {
  var patient = req.body.patient;
  var date = req.body.date;
  var time = req.body.time;
  var doctor = req.body.doctor;
  var section = req.body.section;
  mysqldb.query(
    "DELETE FROM appointments WHERE patient = ? AND date = ? AND time = ? AND doctor = ? AND section = ?",
    [patient, date, time, doctor, section],
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};

exports.deleteAppointmentById = function (req, res) {
  var id = req.body.id;
  mysqldb.query(
    "DELETE FROM appointments WHERE id = ?",
    [id],
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};
