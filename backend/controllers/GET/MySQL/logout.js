exports.logout = function(req, res) {
    req.session.destroy(function (err) {
      if (err) throw err;
      res.send(
        "You have been logged out of your session. Please login to contiune"
      );
    });
  };