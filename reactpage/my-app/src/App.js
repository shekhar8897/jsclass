import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="head">
              <ul className="listdata">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                
                <li className="right"><img  src="https://images.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"/></li>
              </ul>
            </div>
          
        </header>
        <div className="App-intro">

          <p>THIS IS BODY SECTION. </p>        
        </div>

        <footer className="App-footer">
            <p className="footerdata">THIS IS FOOTER</p>
        </footer>
      </div>
    );
  }
}

export default App;
