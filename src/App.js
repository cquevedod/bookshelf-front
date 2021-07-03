
import { useEffect, useState } from 'react';
import clienteAxios from './config/axios';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [consult, setConsult] = useState(true);

  useEffect( () => {
    if(consult) {
      const consultarAPI = () => {
        clienteAxios.get('/api/books')
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
  }, [consult] );

  const message = process.env.REACT_APP_ENV === 'development'
    ? <p>Develop </p>
    : process.env.REACT_APP_ENV === 'production'
     ? <p>Production</p>
     : <p>Test Sin miedo al exito!!</p>

  return (
    <div className="App">
      <header className="App-header">
        {message}
        <p>{JSON.stringify(books)}</p>
      </header>
    </div>
  );
}

export default App;
