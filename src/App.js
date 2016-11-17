import React, { Component } from 'react';
import AppChild from './AppChild';
import AppShowChild from './AppShowChild';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <AppChild />
        <AppShowChild />
      </div>
    );
  }
}

export default App;
