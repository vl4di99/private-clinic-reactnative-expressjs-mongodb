const express = require("express"); // Initializare backend
const cors = require("cors"); // Allow or restrict requested resources on a web server
const bodyParser = require("body-parser"); // Extracts the entire body portion of an incoming request stream and exposes it on req
const cookieParser = require("cookie-parser"); // Cookie pentru logare
const session = require("express-session"); // uses a cookie to store a session id
const bcrypt = require("bcrypt"); // Criptare parola
const saltRounds = 10; // Password salting increases password hash complexity

const app = express();
const port = 3000;
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    key: "userId",
    secret: "pvclinic",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 7, // 7 zile
    },
  })
);

// Let's connect to the database
mysqldb = require("./database").connection;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getALL", (req, res) => {
  mysqldb.query("SELECT * FROM registeredusers", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/getByUser", (req, res) => {
  var username = req.body.username;
  mysqldb.query(
    "SELECT * FROM registeredusers WHERE username = ?",
    [username],
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
    console.log("User already logged in!");
  } else {
    res.send({ loggedIn: false });
    console.log("User must login first!");
  }
});

const loginPost = require('./controllers/POST/MySQL/login');
app.use('/login', loginPost.login);
/*
app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  mysqldb.query(
    "SELECT * FROM registeredusers WHERE username = ?;",
    username,
    function (error, result) {
      if (error) {
        res.send(error);
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "Invalid username/password" });
      }
    }
  );
});
*/

app.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send(
      "You have been logged out of your session. Please login to contiune"
    );
  });
});

app.post("/register", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var ok = true;
  mysqldb.query(
    "SELECT * FROM registeredusers WHERE username = ?",
    [username],
    function (error, result) {
      if (result.length > 0) {
        ok = false;
        console.log("User already exists!");
        res.send("EXIST");
      } else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log("Error occured in hashing password: " + err);
          }else{    
          mysqldb.query(
            "INSERT INTO registeredusers (username,password ) VALUES (?,?)",
            [username, hash],
            function (error, results) {
              if (error) throw error;
              res.json(results);
              console.log("Inserted new user to database!");
            }
          );
          }
        });
      }
    }
  );
});

app.listen(port, () => {
  console.log("Database Server is running at http://localhost:" + port);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////  MONGODB ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mongoose = require("mongoose");

const uri = "mongodb+srv://dnec99:diana@cluster0.tk6jx.mongodb.net/PrivateClinic?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true}, function(err) {
  if(err) throw err;
});

const mongoData = mongoose.connection;
mongoData.on("error", console.error.bind(console, "connection error: "));
mongoData.once("open", function () {
  console.log("Connected successfully to MongoDB");
});

const blogRoute = require('./routes/MongoDB/blog');

app.use("/blog", blogRoute)



// Old login and register
/*
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "privateclinic",
});

db.connect();

app.get("/loginold", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM registeredusers WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password!" });
      }
    }
  );
});

app.post("/registerold", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "INSERT INTO registeredusers (username,password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});
*/
