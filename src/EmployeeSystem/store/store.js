import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employee/employeeSlice"
import popupReducer from "./features/popup/popupSlice"

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        popup: popupReducer
    }
})

export default store;