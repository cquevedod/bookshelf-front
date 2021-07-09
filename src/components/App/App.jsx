
import { useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import logo from '../../assets/images/logo.png'
import './App.scss';

function App() {
  const [books, setBooks] = useState([]);
  const [consult, setConsult] = useState(true);

  useEffect(() => {
    if (consult) {
      const consultarAPI = () => {
        clienteAxios.get('/books')
          .then(respuesta => {
            setBooks(respuesta.data)
            setConsult(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarAPI();
    }
  }, [consult]);

  const message = process.env.REACT_APP_ENV === 'development'
    ? <p>Develop </p>
    : process.env.REACT_APP_ENV === 'production'
      ? <p>Production</p>
      : process.env.REACT_APP_ENV === 'preview'
        ? <p>PR Preview</p>
        : <p>Localhost</p>

  return (
    <div className="App">
      <div className="App-content">
        <div>
          <img href="#" src={logo} alt="logo" />
        </div>
        <p className="environment">Environment: <span>{message}</span></p>
        <p className="books">{JSON.stringify(books)}</p>
      </div>
    </div>
  );
}

export default App;
