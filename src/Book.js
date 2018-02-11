import React from 'react'

class Book extends React.Component {

    render() {
        //Error handling if author or thumbnail returned is empty or null
        let url = (this.props.book.imageLinks) ? 'url(' + this.props.book.imageLinks.thumbnail + ')' : '';
        let auth = (this.props.book.authors && this.props.book.authors.length > 0) ? this.props.book.authors : [];

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{width: 128, height: 193, backgroundImage: url.toString()}}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">

                    {auth.map((author, index) => (
                        <span key={index}>
            {author} <br/>
          </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default Book
