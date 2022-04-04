exports.getServicesPrices = function(req, res) {
    mysqldb.query(
        "SELECT * FROM servicesprices ORDER BY department ASC",
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        }
    );
};