import axios from "axios";
//https://69df7034d6de26e119295e12.mockapi.io/Employee
const api = axios.create({
    baseURL: "https://69df7034d6de26e119295e12.mockapi.io/",
    timeout: 5000,
    headers: {
        'Content-Type': "application/json",
    },
})

export default api;