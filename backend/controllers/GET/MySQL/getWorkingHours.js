exports.getDoctorWorkingHours = function (req, res) {
  mysqldb.query(
    "SELECT username, fullname, department, start_work_hour, end_work_hour FROM registereddoctors ORDER BY department ASC",
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};
