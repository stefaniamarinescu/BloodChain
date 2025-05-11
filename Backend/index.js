const app = require("./app");
const dotenv = require("dotenv");
const e = require("express");
const dbConnection = require("./utils/db");
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Serverul ruleaza pe portul ${PORT}`)
    dbConnection();
})