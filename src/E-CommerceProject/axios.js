import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
    responseType: "json",
    timeout: 2000
})

export { axiosInstance }