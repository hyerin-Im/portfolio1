import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageData: [],
    currPage: 1, //현재페이지
    totalPage: 1, // 전체페이지
    postsPerPage: 10, //한 페이지에 표시할 게시물
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        prevPage: (state, action) => {
            if (state.currPage === 1) {
                state.currPage = 1;
            } else {
                state.currPage--;
            }
        },
        nextPage: (state, action) => {
            if (state.currPage === state.totalPage) {
                state.currPage = state.totalPage;
            } else {
                state.currPage++;
            }
        },
        currentPage: (state, action) => {
            state.currPage = action.payload;
        },
        addData: (state, action) => {
            state.pageData = action.payload;
            /* paging이 들어가는 페이지가 항상 같은 내용이 아니니 거기에 맞게 데이터를 넣어주기위해 */
        },
        totalData: (state, action) => {
            state.currPage = 1;
            state.totalPage = Math.ceil(state.pageData.length / state.postsPerPage);
        },
    },
});

export const { prevPage, nextPage, currentPage, addData, totalData } = paginationSlice.actions;

export default paginationSlice.reducer;
