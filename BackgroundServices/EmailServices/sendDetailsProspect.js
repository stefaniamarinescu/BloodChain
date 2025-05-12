const ejs = require("ejs");
const dotenv = require("dotenv");
const Prospect = require("../models/Prospect");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const sendDetailsProspectEmail = async () => {
    const prospects = await Prospect.find({ status: 0 });
    if (prospects.length > 0) {
        for (let prospect of prospects) {
            ejs.renderFile("templates/BloodDonationProspect.ejs",
                { name: prospect.name },
                async (err, data) => {
                    let messageOption = {
                        from: process.env.EMAIL,
                        to: prospect.email,
                        subject: "BloodChain - Informatii despre programare",
                        html: data
                    }

                    try {
                        sendMail(messageOption);
                        await Prospect.findByIdAndUpdate(prospect._id, { $set: { status: 1 } });
                    } catch (error) {
                        console.log(error);
                    }
                }
            );
        }
    }
};

module.exports = { sendDetailsProspectEmail };