import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookSearch from './BookSearch';
import BookShelfsOverview from './BookShelfsOverview';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch/>
        )}/>

        <Route exact path="/" render={() => (
          <BookShelfsOverview books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default App;
