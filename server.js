const express = require("express");
const mongoose = require("mongoose");
var logger = require("morgan");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost/for_fun_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

const apiRoutes = require("./routes/note-routes");
app.use("/notes", apiRoutes);

const userRoutes = require("./routes/user-routes");
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`listening at: http://localhost:${PORT}`);
});
