import React, { Component } from 'react';
import './App.css';
// import About from './components/about'
// import Experience from './components/experience'
// import Education from './components/education'
import Example from './components/example'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <About/>
        <Experience/>
        <Education/> */}
        <Example/>
      </div>
    );
  }
}

export default App;
