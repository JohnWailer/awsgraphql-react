import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';
import * as serviceWorker from './serviceWorker';


// FROM GraphQL API
import { listPosts } from './graphql/queries';

// Apollo client
import { ApolloProvider } from 'react-apollo';

// Using the API Client - REST APIs
import Amplify, { API } from 'aws-amplify';


// GET Uber service
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
// async getUberData() => {
//     let apiName = 'MyApiName';
//     let path = '/path';
//     let myInit = { // OPTIONAL
//         headers: {} // OPTIONAL
//     }
//     return await API.get(apiName, path, myInit);
// }
//
// getUberData();

//console.log(aws_config);

const client = new AWSAppSyncClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: aws_config.aws_appsync_apiKey,
  }
});

client.query({
  query: gql(listPosts)
}).then(({ data }) => {
  console.log(data);
});

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<ApolloProvider client={client}>
    <App />
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
