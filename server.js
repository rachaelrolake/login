require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db')
const router = require('./routes/user')
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

connectDB();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use('/', router);

app.listen(PORT,HOST, () => {
    console.log(`SERVER IS RUNNING ON ${HOST}:${PORT}`);
});