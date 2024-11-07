import { createSlice } from "@reduxjs/toolkit";

const RestrauntsSlice = createSlice({
    name:'RestrauntsList',
    initialState:{
        ResList:[]
    },
    reducers:{
        ListInitialisation:(state,action)=>{
            state.ResList = action.payload;
        },
    }
});

export const {ListInitialisation} = RestrauntsSlice.actions;
export default RestrauntsSlice.reducer;