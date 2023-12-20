import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authList: localStorage.getItem('authList')
        ? JSON.parse(localStorage.getItem('authList'))
        : [
              {
                  authList: [
                      {
                          username: '관리자',
                          email: 'abc@naver.com',
                          tel: '010-0000-0000',
                          password: 'a1234',
                      },
                  ],
              },
          ],
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
            localStorage.setItem('authList', JSON.stringify(state.authList));
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
