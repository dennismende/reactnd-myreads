import React, { Component } from 'react';

class Book extends Component {
  onChangeShelfOfBook = (event) => {
    const { book, onChangeShelfOfBook } = this.props;
    const newShelf = event.target.value;

    onChangeShelfOfBook(book, newShelf);
  }

  render() {
    const { book } = this.props;
    const { shelf, title } = book;
    const authors = book.authors ? book.authors.toString() : 'No author information';
    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.onChangeShelfOfBook}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
