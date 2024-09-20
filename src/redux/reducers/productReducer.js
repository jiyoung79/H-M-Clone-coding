import { faL } from '@fortawesome/free-solid-svg-icons';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// createSlice : redux를 만듦

let initialState = {
   productList: [],
   selectedItem: null,
   // 로딩스피너
   isLoading: false,
   error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {
   try {
      let url = `https://my-json-server.typicode.com/jiyoung79/H-M-Clone-coding/products?q=${searchQuery}`;
      let response = await fetch(url);
      // 전에는 따로 dispatch를 해주었지만 이 자체를 return을 하면 action에 따라서 분리를 해주고 알아서 api를 호출해준다.
      return await response.json();
   } catch (error) {
      thunkApi.rejectWithValue(error.message);
   }
});
// function productReducer(state = initialState, action) {
//    let { type, payload } = action;
//    switch (type) {
//       case 'GET_PRODUCT_SUCCESS':
//          return { ...state, productList: payload.data };
//       default:
//          return { ...state };
//    }
// }

// export default productReducer;

const productSlice = createSlice({
   // 객체를 매개변수로 받음
   name: 'product',
   initialState,
   reducers: {
      // 객체를 받는데 함수로 이루어져있다
      // getAllProducts(state, action) {
      //    state.productList=action.payload.data
      // }
   },
   // 외부 라이브러리에 의해서 호출이 되면 extraReducers를 사용
   extraReducers: builder => {
      builder
         // 데이터가 오는 중
         .addCase(fetchProducts.pending, state => {
            state.isLoading = true;
         })
         // 데이터 통제
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productList = action.payload;
         })
         // 데이터 에러
         .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
