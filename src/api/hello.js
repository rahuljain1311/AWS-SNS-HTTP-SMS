'use strict';
const Hello = require('../businessLogic/hello');

module.exports = [
    {
        method: 'POST',
        path: '/hello',
        handler: ( request, reply ) => {

            reply( Hello.print(request.payload) );
        },
        config: {
            tags: ['api']
        }
    }
];
