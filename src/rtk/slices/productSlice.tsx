import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import type { productState } from "../../types/product";

export const fetchAllProducts=createAsyncThunk("fetchAllProducts", async()=>{
    const response= await axios.get('https://fakestoreapi.com/products')
    return response.data

})

export const fetchProductById=createAsyncThunk("fetchProductById",async(id:number)=>{
  const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
  return response.data
})

const initialState:productState={
   products:[],
   item:null,
   status:"idle",
   error:null
}
const productSlice=createSlice({
  name:"products",
  initialState,
reducers:{},
extraReducers:
  (builder)=>{
    builder
    .addCase(fetchAllProducts.fulfilled,(state,action)=>{
      state.status="succeeded"
      state.products=action.payload
      state.error=null
    })
    .addCase(fetchAllProducts.pending,(state)=>{
      state.status="loading"
      state.error=null
    })
    .addCase(fetchAllProducts.rejected,(state)=>{
      state.error="Something went wrong we couldnt fetch All Products"
      state.status="failed"
    })
    .addCase(fetchProductById.fulfilled,(state,action)=>{
      state.item=action.payload
      state.status="succeeded"
      state.error=null

    })
    .addCase(fetchProductById.pending,(state)=>{
      state.status="loading"
      state.error=null

    })
    .addCase(fetchProductById.rejected,(state)=>{
      state.status="failed"
      state.error="something went wrong in fetch id"
      
    })
  }

})

export default productSlice.reducer