import { toast } from '@/hooks/use-toast';
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
            toast({
                title: response?.data?.message,
                type: 'success',
              })
            return response.data;

        } catch (error) {
            console.log(error)
            toast({
              title: error?.response?.data?.message,
              type: 'destructive',
            })
        }
    }
)


export const login = createAsyncThunk('auth/login',
    async (formData) => {
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login', formData, {
                withCredentials: true
            })
            toast({
                title: response?.data?.message,
                type: 'success',
              })
            return response.data;
        } catch (error) {
            console.log(error)
            toast({
              title: error?.response?.data?.message,
              type: 'destructive',
            })
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
        .addCase(login.pending, (state, action) => {
            state.isAuthenticated = false,
            state.loading = true,
            state.user = null
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload?.success ? true : false,
            state.loading = false,
            state.user = action.payload?.success ?  action.payload?.user : null 
        })
        .addCase(login.rejected, (state, action) => {
            state.isAuthenticated = false,
            state.loading = false,
            state.user = null
        })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;