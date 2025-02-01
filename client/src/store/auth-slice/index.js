import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null
}

export const register = createAsyncThunk('auth/register',
    async (formData) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
                withCredentials: true
            })
            return response.data;

        } catch (error) {
            console.log(error)
        }
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        })
        .addCase(register.pending, (state, action) => {
            state.loading = true;
        })
       . addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;