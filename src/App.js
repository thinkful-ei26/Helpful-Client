import React, { Component } from 'react';

import EventPage from './components/event-page';
import OrgPublicPage from './components/org-public-page'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <EventPage /> */}
        <OrgPublicPage/>
      </div>
    );
  }
}

export default App;
