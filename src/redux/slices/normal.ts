import { createSlice } from '@reduxjs/toolkit';

const NormalSlice = createSlice({
    initialState: '',
    name: 'normal',
    reducers: {
        setOnScroll: (state, action) => {
            return action.payload;
        },
        clearState: (state) => {
            return '';
        }
    }
})

//Export actions for dispatch
export const { setOnScroll, clearState } = NormalSlice.actions;

// Export reducer for store
export default NormalSlice.reducer;
