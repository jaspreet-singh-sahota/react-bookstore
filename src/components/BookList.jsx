
import React from 'react'
import { connect } from 'react-redux'
import Book from '../containers/Book'

const BooksList = ({ books }) => {


    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Category</th>
                    </tr>
                </thead>
               <tbody>
                   {
                       books.map( book => (
                        <Book book = {book} key={book.id}/>
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

const BooksListConnect = connect(mapStateToProps)(BooksList)

export default BooksListConnect;