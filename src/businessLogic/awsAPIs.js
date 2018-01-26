const AWS = require('aws-sdk');

// const addPadding = (str) => {

//     let result = '';
//     while (str.length > 0) {
//         result += str.substring(0, 151) + '#';
//         str = str.substring(151);
//     }
//     return result;
// };

exports.sendSMS = (params) => {

    // Bug in AWS. It skips last char of every message. Message length = 151 chars. Add padding after every 151th char unitl solved
    // params.Message = addPadding(params.Message);
    
    let aws_opts = {
        signatureVersion: 'v4',
        region:           'us-west-2'
    };
    const sns = new AWS.SNS(aws_opts);
    return new Promise((resolve) => {
        sns.publish(params, function(err, data) {

            if(err)
                return resolve(err.message);
            return resolve(data);
        });
    });
};
