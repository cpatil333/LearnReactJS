import {
    FETCH_WEATHER_PENDING,
    FETCH_CURRENT_SUCCESS,
    FETCH_FORCAST_SUCCESS,
    FETCH_WEATHER_ERROR,
    SET_CITY,
} from "../constants/weatherConstants.js";

import { getAxiosInstance } from "../axios.js";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const fetchWeatherPending = () => {
    return {
        type: FETCH_WEATHER_PENDING,
        payload: "",
    };
};
export const fetchWeatherCureent = (data) => {
    return {
        type: FETCH_CURRENT_SUCCESS,
        payload: data,
    };
};
export const fetchWeatherForcast = (data) => {
    return {
        type: FETCH_FORCAST_SUCCESS,
        payload: data,
    };
};
export const fetchWeatherError = (error) => {
    return {
        type: FETCH_WEATHER_ERROR,
        payload: error,
    };
};
export const setCity = (data) => {
    return {
        type: SET_CITY,
        payload: data,
    };
};

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch(fetchWeatherPending())
        try {
            const currentWeatherDetails = await getAxiosInstance.get(`weather?q=${city}&appid=${API_KEY}`)
            const forcastWeatherDetails = await getAxiosInstance.get(`forecast?q=${city}&appid=${API_KEY}`)

            dispatch(fetchWeatherCureent(currentWeatherDetails.data))
            dispatch(fetchWeatherForcast(forcastWeatherDetails.data.list))
        } catch (error) {
            dispatch(fetchWeatherError(error))
        }
        // console.log(forcastWeatherDetails.data)
        // console.log(currentWeatherDetails.data)
    }
};
