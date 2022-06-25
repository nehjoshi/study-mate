import axios from 'axios';
export const SubmitData = (email, password) => {
    return axios.post("http://localhost:5000/users/login", {email, password})
}