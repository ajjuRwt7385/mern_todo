const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/api/todos");
const db = require("./config/keys").mongoURI;
const path = require("path");

// setup app---
const app = express();

// setup body parser middleware---
app.use(bodyParser.json());

// setup routes middleware---
app.use("/api/todos/", router);

// setup static routes to client---
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// connect to db---
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));

// listen to port---
app.listen(process.env.PORT || 7385, () => {
  console.log("Server listening to port 7385");
});
