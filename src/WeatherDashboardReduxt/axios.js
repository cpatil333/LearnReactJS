import axios from "axios";
///https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
export const getAxiosInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    responseType: "json",
    timeout: 1000
});