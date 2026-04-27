import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAxiosInstance from "../../data/axios"

const initialState = {
    users: [],
    loading: false,
    error: null,
}

//feching data
const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    (async (paylaod, { rejectWithValue }) => {
        try {
            const response = await getAxiosInstance.get('./users')
            const data = response.data
            // console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue("Something went wrong!", error.message)
        }

    })
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (addBuilder) => {
        addBuilder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        addBuilder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        addBuilder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            //state.error = action.error.message
            state.error = action.payload
        })

    }
})

export const { } = userSlice.actions;
export { fetchUsers };
export default userSlice.reducer;