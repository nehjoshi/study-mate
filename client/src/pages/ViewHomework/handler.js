import axios from "axios";
export const CheckIfCompleted = async (email) => {
    return await axios.get(`http://localhost:5000/users/check-if-completed/${email}`);
}