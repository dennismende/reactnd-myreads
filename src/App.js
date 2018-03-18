import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookSearch from './BookSearch';
import BookShelfsOverview from './BookShelfsOverview';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch/>
        )}/>

        <Route exact path="/" render={() => (
          <BookShelfsOverview/>
        )}/>
      </div>
    )
  }
}

export default App;
