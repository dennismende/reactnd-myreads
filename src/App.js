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

  onChangeShelfOfBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(() => {
        book.shelf = newShelf;

        this.setState(state => ({
          books: state.books.filter(bookOfState => bookOfState.id !== book.id).concat([book])
        }));
      });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch/>
        )}/>

        <Route exact path="/" render={() => (
          <BookShelfsOverview
            books={books}
            onChangeShelfOfBook={this.onChangeShelfOfBook}
          />
        )}/>
      </div>
    )
  }
}

export default App;
