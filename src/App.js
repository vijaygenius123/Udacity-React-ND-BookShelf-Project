import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      { name: "currentlyReading", title: "Currently Reading" },
      { name: "wantToRead", title: "Want To Read" },
      { name: "read", title: "Read" }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onChangeBookShelf = (book, event) => {
    const new_shelf = event.target.value
    this.setState(function (state) {

      if (state.books.findIndex(x => x.id === book.id)) {
        state.books[state.books.findIndex(x => x.id === book.id)].shelf = new_shelf;
      } else {
        book.shelf = new_shelf;
        state.books.push(book);
      }

      return {
        books: state.books
      }
    });

    BooksAPI.update(book, new_shelf).then((ret) => {

    });
  }

  render() {
    return (
      /**
       * Books -> Returns the Book component
       * BookShelf -> Displays the books in thier corresponding shelf ( Read, Want To Read & Currently Reading) 
       * BookSearch -> Allows to search the book from the API and add to BookShelf
       * 
       */
      <div className="app">
        <Route exact path='/search' render={() => (
          <BookSearch
            onBookUpdate={this.onChangeBookShelf}
          />
        )
        } />

        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            shelves={this.state.shelves}
            onBookUpdate={this.onChangeBookShelf}
          />
        )} />
      </div>

    )
  }
}

export default BooksApp
