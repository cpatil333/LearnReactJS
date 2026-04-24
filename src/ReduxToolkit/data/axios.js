import axios from "axios";

const getAxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 1000
})

export default getAxiosInstance;