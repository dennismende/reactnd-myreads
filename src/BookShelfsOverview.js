import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class BookShelfsOverview extends Component {
  render() {
    const { books } = this.props;
    const booksCurrentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const booksWantToRead = books.filter(book => book.shelf === 'wantToRead');
    const booksRead = books.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading" books={booksCurrentlyReading}/>
            <BookShelf title="Want to Read" books={booksWantToRead}/>
            <BookShelf title="Read" books={booksRead}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}


export default BookShelfsOverview;
