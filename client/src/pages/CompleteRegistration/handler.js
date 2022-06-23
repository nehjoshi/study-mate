import axios from "axios";
export const CompleteVerification = (token) => {
    return axios.get(`http://localhost:5000/users/verifyEmail/${token}`);
}
export const CreatePassword = (token, password) => {
    return axios.post(`http://localhost:5000/users/createPassword/${token}`, { password });
}