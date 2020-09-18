import React from 'react'
import { connect } from 'react-redux'
import { createBook } from '../actions'
import categories  from "../reducers/categoryData";
import PropTypes from 'prop-types';

class BooksForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      category: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name , value } = event.target
    this.setState({ [name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const { title, category } = this.state
    const { createBook } = this.props

    const book = {
      id: Math.floor(Math.random() * 200),
      title,
      category
    }
    if ( title && category ) {
      createBook(book)
    }
    event.target.title.value = ''
  }
  
  render() {

    return (
      <div className="add-book">
        <h5>ADD NEW BOOK</h5>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <input name="title" placeholder="Enter Book Title" type="text" onChange={this.handleChange} className="book-title" />
          <select name="category" className="action-section">
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button type="submit" className="submit-section" >ADD BOOK</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book))
})

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
