import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  contructor(){
    this.state = {
      project: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    }
  }
  render(){
  return (
    <div className="App">
      My App
      <Projects />
    </div>
  );
}
}


export default App;


//This App.js Component is a placeholder for all other component 
// and we render them from here
