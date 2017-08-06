import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
class BookShelf extends Component {



    render() {

        const books = this.props.books
        const shelves = this.props.shelves
        const onBookUpdate = this.props.onBookUpdate
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf,index) => (
                            <div className="bookshelf" key={index}>
                                <h2 className="bookshelf-title">{shelf.title}</h2>
                                <Books books={books} category={shelf.name} onBookUpdate={onBookUpdate}/>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'> Add a book </Link>
                </div>
            </div>
        )
    }

}

export default BookShelf