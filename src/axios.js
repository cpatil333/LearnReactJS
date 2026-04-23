import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://69df7034d6de26e119295e12.mockapi.io",
    responseType: "json",
    timeout: 1000
})

export { axiosInstance }