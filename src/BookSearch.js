import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class BookSearch extends Component {
  state = {
    searchResultBooks: [],
  };

  searchForBooks = (event) => {
    const { booksWithAssignedShelf } = this.props;
    const query = event.target.value.trim();
    this.setState({ searchResultBooks: [] });

    if (query.length > 0) {
      BooksAPI.search(query).then((booksFromSearch) => {

        if(!booksFromSearch || booksFromSearch.error) {
          return;
        }

        const booksFromSearchWithAssignedShelfs = booksFromSearch.map((bookFromSearch) => {
          const bookWithAssignedShelf = booksWithAssignedShelf.find(bookWithAssignedShelf => bookWithAssignedShelf.id === bookFromSearch.id);
          bookFromSearch.shelf = bookWithAssignedShelf ? bookWithAssignedShelf.shelf : 'none';
          return bookFromSearch;
        });

        this.setState({ searchResultBooks: booksFromSearchWithAssignedShelfs });
      });
    }
  }

  render() {
    const { searchResultBooks } = this.state;
    const { onChangeShelfOfBook } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Go back to overview
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input onChange={this.searchForBooks} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResultBooks.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  onChangeShelfOfBook={onChangeShelfOfBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
