const { response, request } = require("express");
const express = require("express");
// new npm
const bodyParser = require("body-parser");
const port = 2000;
const router = require("./router");
const app = express();
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`server running at location:${port}`);
});

const connect = require("./db.js");
const UserModel = require("./model.js");
connect();
