import React from 'react'
// import * as BooksAPI from './BooksAPI'

const Book=props=>{
  var url='url('+props.book.imageLinks.thumbnail+')';
  return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: url.toString() }}></div>
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
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">

        {props.book.authors.map((author,index) => (
          <span key={index}>
            {author} <br/>
          </span>
        ))}
          </div>
      </div>
  );
}

export default Book
