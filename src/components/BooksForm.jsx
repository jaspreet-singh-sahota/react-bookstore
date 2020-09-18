import React from 'react'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBook } from '../actions'

class BooksForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      category: ''
    }
  }

  handleChange = (event) => {
    const { name , value } = event.target
    this.setState({ [name]: value})
  }


  render() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

    return (
      <form onClick={handleSubmit} onChange={handleChange}>
        <label htmlFor="title">Title</label>
        <input name="title" placeholder="Enter Book Title" type="text" onChange={handleChange} />
        <label htmlFor="category">Category</label>
        <select name="category">
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book))
})

export default connect(null, mapDispatchToProps)(BooksForm);