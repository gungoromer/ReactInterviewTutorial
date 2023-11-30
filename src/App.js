import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Users from './components/Users';

import './App.css';

class App extends Component {

  render() {


    return (
      <div className='container' >
        <Navbar title="Navbar title" />
        <Users />
      </div>
    )
  }
}

export default App;
