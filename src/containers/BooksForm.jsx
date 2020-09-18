import React from 'react'
import { connect } from 'react-redux'
import { createBook } from '../actions'
import { categories } from "../reducers/categoryData";

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
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label htmlFor="title">Title</label>
        <input name="title" placeholder="Enter Book Title" type="text" onChange={this.handleChange} />
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
