import React, { Component } from 'react';
import CreatePost from './createPost';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePost />
      </div>
    );
  }
}

export default App;
