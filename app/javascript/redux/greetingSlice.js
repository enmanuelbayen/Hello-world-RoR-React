import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
    const res = await fetch('/greetings');
    const data = await res.json();
    return data;
});

const greetingSlice = createSlice({
    name: "greeting",
    initialState: [],
    extraReducers: {
        [getGreetings.pending]: (state) => {
            console.log('fetching', state);
        },
        [getGreetings.fulfilled]: (state, action) => {
            console.log('action', action);
            return [action.payload];
        },
    },
});

export default greetingSlice.reducer;