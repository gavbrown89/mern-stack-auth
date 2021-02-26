const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require ('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

const users = require('./api/Users');
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose.connect(db, {
    useNewUrlParser: true
})
.then(() => console.log("Mongo DB successfully connected!"))
.catch(err => console.log(err));

// passport middleware
// Login & Registration routes setup
app.use(passport.initialize());
require('./config/passport');
app.use('/api/users', users);

// Config port to listen to
require('dotenv').config();
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}`);
});