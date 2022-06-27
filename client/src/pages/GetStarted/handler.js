import axios from "axios";
export const FetchDetails = async (email, token) => {
    const config = {
        headers: {
            "Authorization": `${token}`
        }
    }
    return axios.get(`http://localhost:5000/users/fetch-user-details/${email}`, config)
}