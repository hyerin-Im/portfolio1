import { createSlice } from '@reduxjs/toolkit';
import customerdata from '../../assets/api/customerdata';

const initialState = {
    customerData: customerdata,
    current: {},
};

let no = customerdata.length + 1;

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        add: (state, action) => {
            state.customerData.push({ id: no++, ...action.payload });
        },
        remove: (state, action) => {
            state.customerData = action.payload;
        },
        edit: (state, action) => {
            state.current = action.payload;
        },
        update: (state, action) => {
            state.customerData = state.customerData.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, remove, edit, update } = customerSlice.actions;

export default customerSlice.reducer;
