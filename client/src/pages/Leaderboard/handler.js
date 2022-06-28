import axios from "axios";
export const GetLeaderboard = () => {
    return axios.get("http://localhost:5000/leaderboard")
}