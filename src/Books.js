import React, { Component } from 'react'


class Books extends Component {

    

    render() {
        console.log(this.props.books)
        console.log(this.props.category)
        const books = this.props.books
        let caterogy = this.props.category 
        if(caterogy === undefined )
            caterogy = "none"
        const booksToShow = books.filter((books) => books.shelf === caterogy)
        const onBookUpdate = this.props.onBookUpdate

        return (
                <ol className="books-grid">
                    {booksToShow.map((book, index) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                        <select onChange={(e) => onBookUpdate(book, e)} defaultValue={caterogy}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading"  >Currently Reading</option>
                                            <option value="wantToRead" >Want to Read</option>
                                            <option value="read" >Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    )
                    )}
                </ol>
        )
    }
}


export default Books