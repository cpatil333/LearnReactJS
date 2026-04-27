import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axioinstance"

export const getEmployees = createAsyncThunk(
    'employee/getEmployees',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('Employee');
            const data = response.data;
            return data;
        } catch (error) {
            return rejectWithValue("Something went wrong!", error.message)
        }
    }
)