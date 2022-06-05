const crypto = require('crypto');
const nodemailer = require("nodemailer");

exports.handler = async(event, context) => {

    let statusCode = '200';

    try {
        if (event.email != null) {
            const sendLoginEmail = async() => {
                // create reusable transporter object using the default SMTP transport

                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });

                let oneTimeCode = crypto.randomBytes(3).toString("hex").toUpperCase();

                // send mail with defined transport object
                await transporter.sendMail({
                    from: `"drive-4-change" <${process.env.SMTP_USER}>`, // sender address
                    to: `${event.email.toLowerCase().trim()}`, // list of receivers
                    subject: "Drive-4-Change Login Code", // Subject line
                    text: "", // plain text body
                    html: `Here is your verification code: ${oneTimeCode}`, // html body
                });

            }
            await sendLoginEmail();
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {}


    let token = '2BSWTYUY'

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST"
        },
        body: { token: token },
    };
    return {
        response
    };
};