const mongoose = require("mongoose");

const { post } = require("./router");

const uri =
  "mongodb+srv://Fulxe:Mutum1205@test-database.l5z1bhc.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected.");
  } catch (error) {
    console.log(error);
  }
};


module.exports = connect;
