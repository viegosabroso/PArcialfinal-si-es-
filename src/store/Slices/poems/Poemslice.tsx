import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Poem } from "../../../types/poems";


const initialState = {
    poems: [],
}

const Poemslice = createSlice({
    name: "poems",
    initialState,
    reducers: {
        setPoems: (state, action ) => {
            state.poems = action.payload

            
        },
    },
});

export const { setPoems } = Poemslice.actions;


export default Poemslice.reducer;