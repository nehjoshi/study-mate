import axios from "axios";
export const SubmitData = (data) => {
    return axios.post("http://localhost:5000/users/register", data);
}