import React from 'react'
import BookForm from './BookForm'
import {  useParams,useNavigate } from 'react-router-dom'

function EditBook({ books, setBooks}) {
    const { id } = useParams();
    const history= useNavigate();
    const bookToEdit = books.find((book) => book.id !== id )

    const handleOnSubmit = (book) => {
        const filteredBooks = books.filter((book)  => book.id !== id)
        setBooks([book, ...filteredBooks]);
        history('/')
    }
  return (
    <div>
        <BookForm  book={bookToEdit} handleOnSubmit={handleOnSubmit}/>
    </div>
  )
}

export default EditBook