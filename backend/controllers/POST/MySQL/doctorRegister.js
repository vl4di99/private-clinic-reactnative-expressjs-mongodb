const bcrypt = require("bcrypt");

exports.register = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var fullname = req.body.fullname;
    var department = req.body.department;
    var start_work_hour = req.body.start_work_hour;
    var end_work_hour = req.body.end_work_hour;

    var saltRounds = 9;
    var ok = true;
    mysqldb.query(
        "SELECT * FROM registereddoctors WHERE username = ?",
        [username],
        function (error, result) {
            if (result.length > 0) {
                ok = false;
                console.log("Doctor already exists!");
                res.send(ok);
            } else {
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) {
                        console.log("Error occured in hashing password: " + err);
                    } else {
                        mysqldb.query(
                            "INSERT INTO registereddoctors (username,password,fullname,department,start_work_hour,end_work_hour ) VALUES (?,?,?,?,?,?)",
                            [username, hash, fullname, department, start_work_hour, end_work_hour],
                            function (error, results) {
                                if (error) throw error;
                                res.json(results);
                                console.log("Inserted new doctor to database!");
                            }
                        );
                    }
                });
            }
        }
    );
};
