
import { useEffect, useState } from 'react';
import axiosClient from '../../config/axios';
import logo from '../../assets/images/logo.png'
import './App.scss';

function App() {
  const [books, setBooks] = useState([]);
  const [consult, setConsult] = useState(true);

  useEffect(() => {
    if (consult) {
      const fetchBooks = () => {
        axiosClient.get('/books')
          .then(response => {
            setBooks(response.data)
            setConsult(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
      fetchBooks();
    }
  }, [consult]);

  const environment = process.env.REACT_APP_ENV === 'development'
    ? <p>Develop </p>
    : process.env.REACT_APP_ENV === 'production'
      ? <p>Production</p>
      : process.env.REACT_APP_ENV === 'preview'
        ? <p>PR Preview</p>
        : <p>Localhost</p>

  return (
    <div className="app">
      <div className="app-content">
        <div className="logo-container">
          <img href="#" className="logo" src={logo} alt="logo" />
        </div>
        <p className="environment">Environment: <span>{environment}</span></p>
        <p className="books">{JSON.stringify(books)}</p>
      </div>
    </div>
  );
}

export default App;
