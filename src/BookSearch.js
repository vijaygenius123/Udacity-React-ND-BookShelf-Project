import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'
import BookShelf from './BookShelf'

class BookSearch extends Component {

    state = {
        query: '',
        searchResults: []
    }

    searchBooks = (query) => {
        this.setState({
            query: query.trim()
        });
        if (this.state.query) {
            BooksAPI.search(this.state.query, 10).then((searchResults) => {
                searchResults = searchResults.length > 0 ? searchResults : [];
                this.setState({ searchResults });
            });
        }
    }

    onChangeBookShelf = (book, event) => {
    const new_shelf = event.target.value
    this.setState(function (state) {

      if (state.searchResults.findIndex(x => x.id === book.id)) {
        state.searchResults[state.searchResults.findIndex(x => x.id === book.id)].shelf = new_shelf;
      } else {
        book.shelf = new_shelf;
        state.searchResults.push(book);
      }

      return {
        searchResults: state.searchResults
      }
    });

    BooksAPI.update(book, new_shelf).then((ret) => {

    });
  }
    
    render() {

        const onBookUpdate = this.props.onBookUpdate
        const { query, searchResults } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.searchBooks(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <Books books={searchResults} category="none" onBookUpdate={this.onChangeBookShelf} />
                </div>
            </div>
        )
    }
}

export default BookSearch