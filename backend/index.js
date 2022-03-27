const express = require("express"); // Initializare backend
const cors = require("cors"); // Allow or restrict requested resources on a web server
const bodyParser = require("body-parser"); // Extracts the entire body portion of an incoming request stream and exposes it on req
const cookieParser = require("cookie-parser"); // Cookie pentru logare
const session = require("express-session"); // uses a cookie to store a session id
const bcrypt = require("bcrypt"); // Criptare parola
const saltRounds = 10; // Password salting increases password hash complexity

const app = express();
const port = 3000;
app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
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

const getALL = require("./controllers/GET/MySQL/getALL");
app.get("/getALL", getALL.getALL);

const getByUser = require("./controllers/GET/MySQL/getByUser");
app.get("/getByUser", getByUser.getByUser);

const loginGet = require("./controllers/GET/MySQL/login");
app.get("/login", loginGet.login);

const loginPost = require("./controllers/POST/MySQL/login");
app.post("/login", loginPost.login);

const logout = require("./controllers/GET/MySQL/logout");
app.get("/logout", logout.logout);

const register = require("./controllers/POST/MySQL/register");
app.post("/register", register.register);

const doctorLoginPost = require("./controllers/POST/MySQL/doctorLogin");
app.post("/doctorLogin", doctorLoginPost.doctorLogin);

const createAppointment = require("./controllers/POST/MySQL/createAppointment");
app.post("/createAppointment", createAppointment.createAppointment);

const getDoctorsDropdown = require("./controllers/GET/MySQL/getDoctorsDropdown");
app.post("/getDoctorsDropdown", getDoctorsDropdown.getDoctorsDropdown);
app.get("/getDepartmentDropdown", getDoctorsDropdown.getDoctorsDepartment);

app.listen(port, () => {
  console.log("Database Server is running at http://localhost:" + port);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////       ___    ___  ______   __   __    _______    ______         ______      _             ////////////////////////////////////////////
/////////////////////////      ||\\  //||  ||‾‾‾||  ||\\  ||   ||‾‾‾‾‾‾   ||‾‾‾||        ||‾‾‾‾\\    ||             ////////////////////////////////////////////
/////////////////////////      || \\// ||  ||   ||  || \\ ||   ||  ‾_‾||  ||   ||        ||     ||  ||_____         ////////////////////////////////////////////
/////////////////////////     ||      ||  ||___||   ||  \\||   ||____||   ||___||        ||____//   ||___||         ////////////////////////////////////////////
/////////////////////////     ‾‾      ‾‾  ‾‾‾‾‾‾    ‾‾   ‾‾‾   ‾‾‾‾‾‾‾    ‾‾‾‾‾‾         ‾‾‾‾‾‾‾    ‾‾‾‾‾‾‾         ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://dnec99:diana@cluster0.tk6jx.mongodb.net/PrivateClinic?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
  if (err) throw err;
});

const mongoData = mongoose.connection;
mongoData.on("error", console.error.bind(console, "connection error: "));
mongoData.once("open", function () {
  console.log("Connected successfully to MongoDB");
});

const blogRoute = require("./routes/MongoDB/blog");

app.use("/blog", blogRoute);
