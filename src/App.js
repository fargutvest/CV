import React, { Component } from 'react';
import './App.css';
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'

class App extends Component {
  render() {
    return (
      <div className="App">
        <About></About >
        <Experience></Experience>
        <Education></Education>
      </div>
    );
  }
}

export default App;
