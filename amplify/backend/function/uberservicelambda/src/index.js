/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiAwsgraphqlapiGraphQLAPIIdOutput = process.env.API_AWSGRAPHQLAPI_GRAPHQLAPIIDOUTPUT
var apiAwsgraphqlapiGraphQLAPIEndpointOutput = process.env.API_AWSGRAPHQLAPI_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

exports.handler = function (event, context) { //eslint-disable-line
  console.log(`value1 = ${event.key1}`);
  console.log(`value2 = ${event.key2}`);
  console.log(`value3 = ${event.key3}`);

  // Using the API Client

  // let apiName = 'http://darojas.pythonanywhere.com/api/uber-service/';
  // let path = '/uber';
  // let myInit = { // OPTIONAL
  //     headers: {}, // OPTIONAL
  //     response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  //     queryStringParameters: {  // OPTIONAL
  //         name: 'param'
  //     }
  // }
  // API.get(apiName, path, myInit).then(response => {
  //     // Add your code here
  //     console.log(response.data.results);
  // }).catch(error => {
  //     console.log(error.response)
  // });




  context.done(null, 'Hello World'); // SUCCESS with message
};
