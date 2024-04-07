const express = require("express");
const path = require("path");
const { PORT } = require("./constants.js");
const routes = require("./router.js");
//Init
const app = express();

//Express Configurations
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello home page!");
});

app.use(routes);

app.listen(PORT, () => console.log("Server is listening on port 5050"));
