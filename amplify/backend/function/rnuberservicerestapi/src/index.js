const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
//const uberreq =


// lambda name = uberservicerestapi

const server = awsServerlessExpress.createServer(app);
console.log(app.starreq());

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(`EVENT: ${JSON.stringify(event.arguments.msg)}`);
  var uberservice = app.uberreq();
  console.log(uberservice);
  awsServerlessExpress.proxy(server, event, context);
};
