import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import CreatePost from './createPost';
import Map from './components/Map.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default withAuthenticator(App,false);
