const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

const app = express();

// Configurations for "body-parser"
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./public/views"));
app.use(express.static(`${__dirname}/public`));

//Configuration for Multer
const upload = multer({ dest: "public/files" });

app.use("/", (req, res) => {
  res.status(200).render("index");
});

//API Endpoint for uploading file
app.post("/api/uploadFile", upload.single("myFile"), (req, res) => {
  // Stuff to be added later
  console.log(req.file);
});

// Configurations for setting up ejs engine &
// displaying static files from "public" folder
// TO BE ADDED LATER

// Routes will be added here later on

//Express server
// module.exports = app;

app.listen(3000,()=>{
  console.log('Server is running at 3000');
})