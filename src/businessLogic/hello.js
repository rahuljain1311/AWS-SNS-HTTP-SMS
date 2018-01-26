'use strict';

exports.print = (payload) => {

    console.log('payload = ', payload);

    payload = JSON.parse(JSON.stringify(payload));
    console.log('JSON payload = ', payload);
};
