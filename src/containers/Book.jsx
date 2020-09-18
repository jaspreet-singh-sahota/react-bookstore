import React from 'react'

const Book = ({ book, removeBook }) => {
    return (
              <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.category}</td>
                <td>
                    <button onClick={()=>removeBook(book)}>Remove Book</button>
                </td>
            </tr>
    )
}

export default Book