const express = require("express");
const path = require("path");

const app = express();
const indexRouter = require("./routes/index");

// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
// Routes
app.use("/", indexRouter);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});