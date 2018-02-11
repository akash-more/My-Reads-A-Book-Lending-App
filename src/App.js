import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import Book from './Book'

class BooksApp extends React.Component {
    state = {
        books: [],
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        query: '',
        searchResults: []
    }

    componentDidMount() {
        this.displayAllBooks();
    }

    displayAllBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    updateQuery = (query) => {
        this.setState({query: query})
        BooksAPI.search(query).then((searchResults) => {
            this.setState({searchResults})
        })
    }

    changeBookShelf = (book, shelf) => {
        console.log("State of " + book.id + " changed to " + shelf);
        BooksAPI.update(book, shelf).then((books) => {
            if (books) {
                this.displayAllBooks();
            }
        })
    }

    render() {
        const {query} = this.state;
        let results = this.state.searchResults;
        results = (results && results.length >=1) ? results: [];

        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
                            <div className="search-books-input-wrapper">
                                {/*
                                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                  You can find these search terms here:
                                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                  you don't find a specific author or title. Every search is limited by search terms.
                                */}

                                <input type="text"
                                       placeholder="Search by title or author"
                                       value={query}
                                       onChange={(event) => this.updateQuery(event.target.value)}/>

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid">
                                {
                                    results.map((eachBook, index) => (
                                        <li key={index} className='contact-list-item'>
                                            <Book
                                                onBookShelfChange={this.changeBookShelf}
                                                book={eachBook}
                                            />
                                        </li>
                                    ))

                                }
                            </ol>
                        </div>
                    </div>
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Shelf onBookShelfChange={this.changeBookShelf} shelfTitle={"Currently Reading"}
                                       shelfName={"currentlyReading"}
                                       books={this.state.books}/>
                                <Shelf onBookShelfChange={this.changeBookShelf} shelfTitle={"Want to Read"}
                                       shelfName={"wantToRead"} books={this.state.books}/>
                                <Shelf onBookShelfChange={this.changeBookShelf} shelfTitle={"Read"} shelfName={"read"}
                                       books={this.state.books}/>
                            </div>
                        </div>
                        <div className="open-search">
                            <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp
