import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    }

    render() {

        const { book, onChangeBookShelf, showModalContent } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }} onClick={ () => showModalContent(book.title, book.description) }></div>
                    <BookShelfChanger book={ book } onChangeBookShelf={ onChangeBookShelf } />
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors ? book.authors.join('; ') : '' }</div>
            </div>
        );
    }
}

export default Book;