import React from 'react';
import './App.css';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div>
      <div className="nav-bar">
        <div className="bookstore-title">
          <h1>Bookstore CMS</h1>
        </div>
        <div className="nav-name">
          <p>BOOKS</p>
        </div>
        <div className="cat-name">
          <p>CATEGORIES</p>
        </div>
        <div className="profile-name">
          <div className="border-section">
            <i className="fas fa-user" />
          </div>
        </div>
      </div>
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;
