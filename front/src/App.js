import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Show from './Show';
import  Table from "./Table";
import Nutrtion from"./nutrtion";
import Counter from "./Counter";
import { Switch, Route } from 'react-router-dom'
import list from "./list";
import About from './About'

class App extends Component {
  state={}
  render() {
    return (
      <div className="App">
      <a href="/"> Todo List </a>
      <a href="/about"> About </a>
      <a href="/Nutrtion"> Nut </a>
      <a href="/Counter"> Counter </a>
      <a href="/list"> list </a>
{/* <Show/> */}
    <Switch>
      <Route exact path='/' component={Table}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/Nutrtion' component={Nutrtion}/>
      <Route exact path='/Counter' component={Counter}/>
      <Route exact path='/list' component={list}/>
    </Switch>

        {/* <TodoList></TodoList> */}
      </div>
    );
  }
}

export default App;
