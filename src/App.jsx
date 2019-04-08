import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Challenge from './components/Challenge';
import Challenges from './components/Challenges';
import Login from './components/Login';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/challenge" component={Challenge} />
          <Route path="/challenges" component={Challenges} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
