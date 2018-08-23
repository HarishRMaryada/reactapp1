import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import List from './Components/List'

class App extends Component {
  render() {
    return (
      <div className="">
        <p className="">
          <NavBar></NavBar>
          Get started.
          <List></List>
        </p>
      </div>
    );
  }
}

export default App;
