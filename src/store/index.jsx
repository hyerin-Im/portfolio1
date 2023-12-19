import { configureStore } from '@reduxjs/toolkit';
import notice from './modules/noticeSlice';
import cart from './modules/cartSlice';
import auth from './modules/authSlice';
import customer from './modules/customerSlice';
import pagination from './modules/paginationSlice';

export const store = configureStore({
    reducer: {
        notice,
        cart,
        auth,
        customer,
        pagination,
    },
});
