import React from 'react'

import React, { Component } from 'react'

class BooksForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      category: ''
    }
  }
  render() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

    return (
      <form>
        <input placeholder="Enter Book Title" type="text" />
        <select>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  }
}




export default BooksForm;