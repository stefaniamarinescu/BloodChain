const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require('node-cron');
const dbConnection = require("./utils/db");
dotenv.config();

const PORT = process.env.PORT;

const run = () => {
    cron.schedule('* * * * * *', () => {
       // console.log('running a task every second');
    });
}

run();

app.listen(PORT, () => {
    console.log(`BackgroundServices ruleaza pe portul ${PORT}`);
    dbConnection();
});