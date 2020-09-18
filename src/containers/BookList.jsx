
import React from 'react'
import { connect } from 'react-redux'
import Book from '../components/Book'
import { deleteBook } from '../actions/index'

const BooksList = ({ books, deleteBook }) => {

    const handleRemoveBook = book => {
        deleteBook(book)
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Remove</th>
                    </tr>
                </thead>
               <tbody>
                   {
                       books.map( book => (
                        <Book book = {book} key={book.id} removeBook = { handleRemoveBook }/>
                       ))
                   }
                </tbody> 
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    books: state.book,
})

const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book))
})

const BooksListConnect = connect(mapStateToProps, mapDispatchToProps)(BooksList)

export default BooksListConnect;