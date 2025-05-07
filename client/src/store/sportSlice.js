import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllSports } from "../api";

export const fetchAllSportsAsync = createAsyncThunk('sports/fetchAllSports',async(values,thunkAPI)=>{
try {
    const responce= await fetchAllSports();
    return responce.data.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error?.message)
}
}) 

const sportsSlice=createSlice({
    name:'sports',
    initialState:{
sports:[],
error:null,
isLoading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(fetchAllSportsAsync.pending,(state)=>{
    state.isLoading=true
})
builder.addCase(fetchAllSportsAsync.fulfilled,(state,action)=>{
    state.sportsList=action.payload;
    state.isLoading=false;
})
builder.addCase(fetchAllSportsAsync.rejected,(state,action)=>{
   state.sport=action.payload
    state.isLoading=false;
})
    }
})
export default sportsSlice.reducer;