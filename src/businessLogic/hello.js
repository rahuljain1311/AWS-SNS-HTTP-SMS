'use strict';
const request = require('request');
const AwsAPI = require('./awsAPIs');
const _ = require('lodash');

exports.print = (payload) => {

    if(payload.type === 'SubscriptionConfirmation'){
        
        return new Promise((resolve, reject) => {
            const url = payload.SubscribeURL;
            request(url, (error, response) => {

                if (!error && response.statusCode == 200) {
                    console.log('Yess! We have accepted the confirmation from AWS');
                    return resolve();
                }
                else 
                    return reject();
            });
        });
    }
    else if(payload.type === 'Notification'){

        console.log('payload = ', payload);
        if(_.toLower(payload.Message) === 'carla'){

            const message = 
            `Message from Acme insurance: 
            
            Flu shots are free and reduce your family's risk by 50%  Carla
            
            Get a flu shot today:
            http://13.127.76.212/u/rJD0DI9
            
            Already have the flu?
            Find a doctor:
            http://13.127.76.212/u/AjB2zWE
            
            Check your symptoms:
            http://13.127.76.212/u/FDJPmIw `;

            const smsObject = {
                Message: message,
                PhoneNumber: '+919741381041',
                Subject: 'Acme Insurance',
                MessageAttributes: {
                    'AWS.SNS.SMS.SMSType':{
                        DataType:    'String',
                        StringValue: 'Transactional'
                    }
                }
            };
            return AwsAPI.sendSMS(smsObject);
        }
        else {
            const message = 
            `Message from Acme insurance: 

            You are 25x more likely to get the flu in the next 10 days 
            
            Our data shows an elevated level of the flu in 8-10 year olds in Fountain Square, IN 
            
            Flu shots are free and reduce your family's risk by 50% 
            
            Get a flu shot today:
            http://13.127.76.212/u/rJD0DI9
            
            Already have the flu?
            Find a doctor:
            http://13.127.76.212/u/AjB2zWE
            
            Check your symptoms:
            http://13.127.76.212/u/FDJPmIw `;
            const smsObject = {
                Message: message,
                PhoneNumber: '+919741381041',
                Subject: 'Acme Insurance',
                MessageAttributes: {
                    'AWS.SNS.SMS.SMSType':{
                        DataType:    'String',
                        StringValue: 'Transactional'
                    }
                }
            };
            return AwsAPI.sendSMS(smsObject);
        }
    }
};
