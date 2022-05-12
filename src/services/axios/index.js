import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://randomuser.me/api/?results=2",
});

export default axiosInstance;