exports.getDoctorsDropdown = function(req, res) {
    var department = req.body.department;
    mysqldb.query(
        "SELECT fullname FROM registereddoctors where department=?",
        [department],
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        }
    );
};

exports.getDoctorsDepartment = function(req, res) {
    mysqldb.query(
        "SELECT department FROM registereddoctors",
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        }
    );
};