const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
//const uberreq =

const server = awsServerlessExpress.createServer(app);
console.log('MKKKK');
//console.log(app.uberreq());
//console.log(app);
//console.log(app.uberreq());
console.log(app.starreq());


exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  awsServerlessExpress.proxy(server, event, context);
};
