const jwt = require('jsonwebtoken');
exports.handler = async(event, context) => {

    const i = 'Drive4Change'; // Issuer 
    const s = 'Verification'; // Subject 
    const a = 'APP'; // Audience

    let token = '';

    try {
        if (event.email != null && event.code != null && event.token == '2BSWTYUY') {

            let payload = {
                email: event.email
            };
            // SIGNING OPTIONS
            let signOptions = {
                issuer: i,
                subject: s,
                audience: a,
                expiresIn: "1h",
                algorithm: "RS256"
            };
            token = jwt.sign(payload, '3XWESDFFS', signOptions);
        }

    } catch (err) {
        console.log(err)
    } finally {}

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