import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authList: [],
    user: null,
    authed: false,
};

let no = 1;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const newItem = state.authList.find((item) => item.email === email);
            if (newItem.password === password) {
                state.user = newItem;
                state.authed = true;
            }
        },
        logout: (state, action) => {
            state.user = null;
            state.authed = false;
        },
        signup: (state, action) => {
            state.authList = [state.authList, { id: no++, ...action.payload }];
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
