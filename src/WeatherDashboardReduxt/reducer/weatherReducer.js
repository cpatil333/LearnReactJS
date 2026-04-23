import { FETCH_CURRENT_SUCCESS, FETCH_WEATHER_PENDING, FETCH_FORCAST_SUCCESS, FETCH_WEATHER_ERROR, SET_CITY } from "../constants/weatherConstants"
const initialState = {
    city: 'Delhi',
    current: null,
    forecast: null,
    loading: false,
    error: null
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_PENDING:
            return {
                ...state,
                loading: true, error: null
            }
        case FETCH_CURRENT_SUCCESS:
            return { ...state, loading: false, current: action.payload }
        case FETCH_FORCAST_SUCCESS:
            return { ...state, loading: false, forecast: action.payload }
        case FETCH_WEATHER_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        case SET_CITY:
            return { ...state, city: action.payload }
        default:
            return state
    }
}
