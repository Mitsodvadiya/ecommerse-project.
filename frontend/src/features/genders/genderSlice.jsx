import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { fetchAllgenders } from './genderApi'

const initialState={
    status:"idle",
    genders:[],
    errors:null
}

export const fetchAllgendersAsync=createAsyncThunk('genders/fetchAllgendersAsync',async()=>{
    const genders=await fetchAllgenders()
    return genders
})

const genderSlice=createSlice({
    name:"genderSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchAllgendersAsync.pending,(state)=>{
                state.status='idle'
            })
            .addCase(fetchAllgendersAsync.fulfilled,(state,action)=>{
                state.status='fulfilled'
                state.genders=action.payload
            })
            .addCase(fetchAllgendersAsync.rejected,(state,action)=>{
                state.status='rejected'
                state.errors=action.error
            })

    }
})

// exporting selectors
export const selectgenderStatus=(state)=>state.genderSlice.status
export const selectgenders=(state)=>state.genderSlice.genders
export const selectgenderErrors=(state)=>state.genderSlice.errors

export default genderSlice.reducer