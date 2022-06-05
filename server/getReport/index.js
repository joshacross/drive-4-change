const jwt = require('jsonwebtoken');
exports.handler = async(event, context) => {

    const i = 'Drive4Change'; // Issuer 
    const s = 'Verification'; // Subject 
    const a = 'APP'; // Audie

    let data = {};
    try {
        if (event.email != null && event.token != undefined) {
            let token = req.headers.authorization.split(' ')[1];
            let verifyOptions = {
                issuer: i,
                subject: s,
                audience: a,
                expiresIn: "12h",
                algorithm: ["RS256"]
            };
            jwt.verify(token, publicKEY, verifyOptions);

            data = {}
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
        body: { data: data },
    };
    return {
        response
    };
};