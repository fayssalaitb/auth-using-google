const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require('./models/User')
require("./services/passport");
//require("./models/User");
const authRoutes = require("./routes/authRoutes");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true, ssl:true  }).catch(error=>console.log(JSON.stringify(error)))


const app = express();

authRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);






// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin-fayssal:MAC13dell45@cluster0-0cwlt.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

