import React, { Component } from 'react';
import ShoppingList from './components/ShoppingList';
import Game from './components/Game'; 
import Persons from './components/Persons'; 
import NavBar from './components/NavBar'; 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom'; 
import './App.css';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div className="container">
	      	<NavBar/>
	      	<Route exact path="/" component={Persons}/>
	      	<Route path="/about" component={About}/>
	      	<Route path="/contact" component={Contact}/>
	      </div>
	    </BrowserRouter>
    );
  }
}

export default App;
