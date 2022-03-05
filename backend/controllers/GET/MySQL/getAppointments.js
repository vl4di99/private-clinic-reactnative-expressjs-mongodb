exports.getAppointmentWhereDoctor = function(req, res) {
    var doctor = req.body.doctor;
    var patient = req.body.patient;
    var section = req.body.section;
    var date = req.body.date;
    mysqldb.query(
      "SELECT * FROM appointments WHERE doctor = ? AND section = ? AND date = ? AND patient = ?",
      [doctor,section,date,patient],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  };

exports.getAppointmentWherePatient = function(req, res) {
  var patient = req.body.patient;
  var date = req.body.date;
  mysqldb.query(
    "SELECT * FROM appointments WHERE patient = ? AND date >= ?",
    [patient,date],
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};

exports.getAllAppointmentsWherePatient = function(req, res) {
  var patient = req.body.patient;
  mysqldb.query(
    "SELECT * FROM appointments WHERE patient = ?",
    [patient],
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};
