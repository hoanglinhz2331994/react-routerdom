import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';

class App extends Component {
  render() {
    // console.log(this.state.data);
    
    return (
      <div>
        <Router>
          <div>
            <Nav/>
            {/* <Home/> */}
            {/* <News/> */}
            {/* <NewsDetail/> */}
            {/* <Contact/> */}
            <DieuHuongURL />
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

