/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiAwsgraphqlapiGraphQLAPIIdOutput = process.env.API_AWSGRAPHQLAPI_GRAPHQLAPIIDOUTPUT
var apiAwsgraphqlapiGraphQLAPIEndpointOutput = process.env.API_AWSGRAPHQLAPI_GRAPHQLAPIENDPOINTOUTPUT
var functionUberservicelambdaName = process.env.FUNCTION_UBERSERVICELAMBDA_NAME

Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/
var starreq = function () {
  try {
    app.get('/starwars', function(req, res) {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        res.json({
          success: true,
          people: response.data.results
        })
      })
      .catch(error => {
        res.json({
          success: false,
          error
        })
      })
    });
  } catch (e) {
    return undefined;
  }
};
  app.get('/starwars', function(req, res) {
  axios.get('https://swapi.co/api/people/')
    .then(response => {
      res.json({
        success: true,
        people: response.data.results
      })
    })
    .catch(error => {
      res.json({
        success: false,
        error
      })
    })
  });

var uberreq = function () {

  try {
    app.get('/uber', function(req, res) {
    axios.get('http://darojas.pythonanywhere.com/api/uber-service/')
      .then(response => {
        res.json({

          success: true,
          //people: response.data.results
          people: response.data
        })
        console.log('Response: ', response);
        //return people;
        //var msg = 'OK';
        //return people;
        //return msg;

      })
      .catch(error => {
        res.json({
          success: false,
          error
        })
      })
    })
  } catch (e) {
    var msg = 'failed';
    return msg;
  }
};

  app.get('/uber', function(req, res) {
  axios.get('http://darojas.pythonanywhere.com/api/uber-service/')
    .then(response => {
      res.json({

        success: true,
        //people: response.data.results
        people: response.data
      })
      console.log('Response: ', response);
      return people;
      debugger;
    })
    .catch(error => {
      res.json({
        success: false,
        error
      })
    })
  });

app.get('/items', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/items', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/items', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/items', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = {
    app,
    uberreq,
    starreq
};
