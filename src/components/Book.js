import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Book({
    id,
    bookname,
    author,
    price,
    quantity,
    date,
    handleRemove
 }) {
const history= useNavigate()

  return (
    <Card style={{ width: '18rem'}} className="book">
    <Card.Body>
<Card.Title className='book-title'>{bookname} </Card.Title>
<div className="book-details">
    <div>Author: {author}</div>
    <div>Quantity: {quantity}</div>
    <div>Price: {price}</div>
    <div>Date: {new Date(date).toLocaleDateString()}</div>
</div>
<Button className='edit-btn' variant='primary' onClick={() => history((`/edit/${id}`))}
>Edit</Button>

<Button className='delete-btn' variant='danger' 
onClick={()=> handleRemove(id)}
>Delete</Button>

    </Card.Body>

    </Card>
  )
}

export default Book