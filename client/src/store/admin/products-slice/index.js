import { createSlice, createAsyncThunk } from"@reduxjs/toolkit";
import axios from 'axios';


export const addProduct = createAsyncThunk('adminProductSlice/addProduct',
    async(product)=>{
        const result = await axios.post('http://localhost:5000/api/admin/products/add',product,{
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        return result.data
    }
)


export const fetchAllProducts = createAsyncThunk('adminProductSlice/fetchAllProducts',
    async()=>{
        const result = await axios.get('http://localhost:5000/api/admin/products/get');
        return result.data
    }
)

export const editProduct = createAsyncThunk('adminProductSlice/editProduct',
    async({id , product})=>{
        const result = await axios.put(`http://localhost:5000/api/admin/products/edit/${id}`,product,{
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        return result.data
    }
)

export const deleteProduct = createAsyncThunk('adminProductSlice/deleteProduct',
    async(id)=>{
        const result = await axios.delete(`http://localhost:5000/api/admin/products/delete/${id}`);
        return result.data
    }
)


const initialState = {
    products : [],
    currentProduct : null,
    loading : false
}

const AdminProductSlice = createSlice({
    name:"adminProductSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.products = action.payload.products
            state.loading = false
        })
        .addCase(fetchAllProducts.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(fetchAllProducts.rejected,(state,action)=>{
            state.loading = false
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.products.push(action.payload.product)
            state.loading = false
        })
        .addCase(addProduct.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(addProduct.rejected,(state,action)=>{
            state.loading = false
        })
        .addCase(editProduct.fulfilled,(state,action)=>{
            state.products = state.products.map((product)=>product._id === action.payload.product._id ? action.payload.product : product)
            state.loading = false
        })
        .addCase(editProduct.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(editProduct.rejected,(state,action)=>{
            state.loading = false
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.products = state.products.filter((product)=>product?._id !== action.payload.product?._id)
            state.loading = false
        })
        .addCase(deleteProduct.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(deleteProduct.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default AdminProductSlice.reducer;