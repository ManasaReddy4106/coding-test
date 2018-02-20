import React, { Component } from 'react';
import './App.css';
import Main from './components/main/main';
import data from './mockData/data.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NetFlix Sample Test App</h1>
        </header>
        <Main data={data}/>
      </div>
    );
  }
}

export default App;
