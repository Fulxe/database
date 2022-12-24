const cors = require("cors")
const { response, request } = require("express");
const express = require("express");
// new npm
const bodyParser = require("body-parser");
const port = 2000;
const router = require("./router");
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(router);

const connect = require("./db.js");
const UserModel = require("./model.js");
connect();

app.listen(port, () => {
  console.log(`server running at location:${port}`);
});