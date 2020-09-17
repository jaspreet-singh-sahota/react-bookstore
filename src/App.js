import React from 'react';
import './App.css';
import BookList from './components/BookList';
import BooksForm from './components/BooksForm';

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
