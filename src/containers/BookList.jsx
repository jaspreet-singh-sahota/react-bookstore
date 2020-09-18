
import React from 'react'
import { connect } from 'react-redux'
import Book from '../components/Book'
import { deleteBook, changeFilter } from '../actions/index'
import CategoryFilter from '../components/CategoryFilter'
import PropTypes from 'prop-types';

const BooksList = ({ books, deleteBook, filter, changeFilter }) => {
    
    return(
        <div>
            <CategoryFilter filterCategory={changeFilter}/>
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
                    {books
                        .filter(book => (filter === 'All' ? true : book.category === filter))
                        .map(book => (
                            <Book book={book} key={book.bookId} removeBook={deleteBook} />
                        ))}
                </tbody> 
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    books: state.books,
    filter: state.filter,
})

const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book)),
    changeFilter: category => dispatch(changeFilter(category)),
})

BooksList.propTypes = {
    books: PropTypes.instanceOf(Array).isRequired,
    deleteBook: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };

const BooksListConnect = connect(mapStateToProps, mapDispatchToProps)(BooksList)

export default BooksListConnect;