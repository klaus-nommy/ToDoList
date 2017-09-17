import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Logic from './Logic.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ToDo List</h2>
        </div>
<logic>
<form>
  <label>
    ToDo:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
</logic>
      </div>
    );
  }
}

export default App;
