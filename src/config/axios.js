import axios from 'axios'
const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL ?? 'https://buk-backendo-local.herokuapp.com/'
});

export default clienteAxios;