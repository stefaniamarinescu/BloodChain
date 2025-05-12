const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require('node-cron');
const dbConnection = require("./utils/db");
const { sendDetailsProspectEmail } = require("./EmailServices/sendDetailsProspect");
const { sendEligibilityEmail } = require("./EmailServices/sendEligibilityEmail");
const { sendBloodDonationReminder } = require("./EmailServices/sendBloodDonationReminder");
const { sendDetailsDonorEmail } = require("./EmailServices/sendDonorDetailsEmail");
dotenv.config();

const PORT = process.env.PORT;

const run = () => {
    cron.schedule('* * * * * *', () => {
       sendDetailsProspectEmail();
       sendEligibilityEmail();
       sendBloodDonationReminder();
       sendDetailsDonorEmail();
    });
}

run();

app.listen(PORT, () => {
    console.log(`BackgroundServices ruleaza pe portul ${PORT}`);
    dbConnection();
});