import React from 'react';
import './App.css';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div>
      <h1 className="title">Book store</h1>
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;
