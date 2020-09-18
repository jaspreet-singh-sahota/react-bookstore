import React from 'react'
import PropTypes from 'prop-types';

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

Book.propTypes = {
    book: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
    removeBook: PropTypes.func.isRequired,
  };

export default Book