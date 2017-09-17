import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {easyComp} from 'react-easy-state';



class App extends Component {
  store = {
    inputting: "",
    todos:[
      "test1",
      "test2"
    ]
  };
  
  onChange(ev){
    this.store.inputting = ev.target.value; 
  }

  render() {
    const {onChange} = this;
    const {inputting} = this.store;
    return (
      <div className="App">
        <div className="App-header">
          <h2>ToDo List</h2>
        </div>

        <form>
          <label>
             ToDo:
            <input type="text" name="name" value={inputting} onChange={onChange} />
          </label>
            <input type="submit" value="Submit" />
        </form>

for (var i = 0; i < todos.length; i ++){
  console.log(todos[i]);
}
  
}
</div>
    );

  }
}

export default easyComp(App);
