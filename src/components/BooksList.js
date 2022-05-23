import React from 'react'
import _ from 'lodash'
import Book from './Book'


function BooksList({books, setBooks}) {
const handleRemove = (id) => {
  setBooks(books.filter((book) => book.id !== id ))
}


  return (
   <React.Fragment>
 <div className='book-list'>

        {!_.isEmpty(books) ? (books.map((book) => (
          <Book key={book.id} {...book} handleRemove={handleRemove}
            
          />
        ))) : (<p className='message'>No books available. Please add some books</p>)}
    </div>

   </React.Fragment>
  )
}

export default  BooksList