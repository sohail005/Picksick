// src/store/backgroundSlice.js
import { createSlice } from '@reduxjs/toolkit';

const backgroundSlice = createSlice({
    name: 'background',
    initialState: {
        color: 'white', // initial background color 
        defaultTextColor: 'black',
        language: "ENGLISH"
    },
    reducers: {
        changeBackgroundColor: (state, action) => {
            state.color = action.payload;
        },
        changeDefaultTextColor: (state, action) => {
            state.defaultTextColor = action.payload;
        },
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },

    },
});

export const { changeBackgroundColor, changeDefaultTextColor, changeLanguage } = backgroundSlice.actions;

export default backgroundSlice.reducer;
