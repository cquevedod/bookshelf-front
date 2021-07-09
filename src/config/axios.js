import axios from 'axios'
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL ?? 'https://buk-backendo-local.herokuapp.com/api'
});

export default axiosClient;