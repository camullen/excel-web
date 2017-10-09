import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Sheet-container">
          <div className="Row-labels-column">
            <div className="Row-label"></div>
            <div className="Row-label">1</div>
            <div className="Row-label">2</div>
            <div className="Row-label">3</div>
            <div className="Row-label">4</div>
            <div className="Row-label">5</div>
          </div>
          <div className="Rows-container">
            <div className="Column-labels-row">
              <div className="Column-label">A</div>
              <div className="Column-label">B</div>
              <div className="Column-label">C</div>
              <div className="Column-label">D</div>
              <div className="Column-label">E</div>
              <div className="Column-label">F</div>
              <div className="Column-label">G</div>
            </div>
            <div className="Row">
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
            </div>
            <div className="Row">
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
            </div>
            <div className="Row">
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
            </div>
            <div className="Row">
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
            </div>
            <div className="Row">
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
              <div className="Cell"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
