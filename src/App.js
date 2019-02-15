import React, { Component } from 'react';

//import EventPage from './components/event-page';
import GeoLocation from './components/geo-location';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeoLocation />
      </div>
    );
  }
}

export default App;
