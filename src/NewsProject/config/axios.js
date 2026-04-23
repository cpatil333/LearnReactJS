import axios from "axios";

const getAxiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    responseType: "json",
    timeout: 5000
})
export default getAxiosInstance;