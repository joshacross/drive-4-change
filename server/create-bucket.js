// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const { v4: uuidv4 } = require('uuid');

AWS.config.update({ region: 'us-east-2' });

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

//Params for calling createBucket
var bucketParams = {
    Bucket: 'user-images-' + uuidv4(),
};

//calling s3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Success');
    }
})



