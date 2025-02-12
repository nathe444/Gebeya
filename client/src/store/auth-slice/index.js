import { toast } from '@/hooks/use-toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null,
    submitting : false
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

export const checkAuth = createAsyncThunk('auth/checkAuth',
    async()=>{
        const response = await axios.get('http://localhost:5000/api/auth/check-auth', {
            withCredentials: true,
            headers:{
                'Cache-Control': 'no-store , no-cache , must-revalidate ,proxy-revalidate',
                Expires : '0'
            }
        });
        return response.data
    }
)

export const logout = createAsyncThunk('auth/logout',
    async()=>{
        const response = await axios.post('http://localhost:5000/api/auth/logout',{},{
            withCredentials: true
        });
        return response.data;
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
            state.loading = false;
            state.submitting = true;
        })
       . addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
        .addCase(login.pending, (state, action) => {
            state.isAuthenticated = false,
            state.loading = false,
            state.submitting = true;
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
        .addCase(checkAuth.pending, (state, action) => {
            state.isAuthenticated = false,
            state.loading = true,
            state.user = null
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload?.success ? true : false,
            state.loading = false,
            state.user = action.payload?.success ?  action.payload?.user : null 
        })
        .addCase(checkAuth.rejected, (state, action) => {
            state.isAuthenticated = false,
            state.loading = false,
            state.user = null
        })
        .addCase(logout.pending, (state, action) => {
            state.loading = true
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.isAuthenticated = false,
            state.loading = false,
            state.user = null
        })
        .addCase(logout.rejected, (state, action) => {
            state.isAuthenticated = false,
            state.loading = false,
            state.user = null
        })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;