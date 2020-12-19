const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const pricesRoute = require('./routes/prices');
const fruitsRoute = require('./routes/fruits');
const feedsRoute = require('./routes/feeds');

app.use('/prices', pricesRoute);
app.use('/fruits', fruitsRoute);
app.use('/feeds', feedsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to DB")
);

app.listen(3000);
