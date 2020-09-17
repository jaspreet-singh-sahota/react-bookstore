import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/index';

const initialState = {
  booksReducer: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Weep Not Child',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'First man in the moon',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Upon this mountain',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Black Magic',
      category: 'Sci-fi',
    },
  ],

};

const store = createStore(
  rootReducer, initialState,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
