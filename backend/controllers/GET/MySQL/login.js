exports.login = function (req, res) {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user[0] });
    // console.log("User already logged in!");
  } else {
    res.send({ loggedIn: false });
    // console.log("User must login first!");
  }
};
