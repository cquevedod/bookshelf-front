import axiosClient from '../config/axios';

/**
 * Returns a promise
 *
 * @param {Object} { email, password, confirmPassword }
 * @return {Function} axios request
 */
const register = ({ email, password, confirmPassword }) => {
    return axiosClient.post('/register', {
        email,
        password,
        confirmPassword
    })
}

const signin = ({ email, password }) => {
    return axiosClient.post('/login', { email, password })
}

/**
 * Returns a promise
 *
 * @param {Object} { token } of an authenticated user
 * 
 * @return {Function} the axios request
 */
const myInfo = ({ token }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axiosClient.get('/user/me', config);
}



export {
    register,
    signin,
    myInfo
}