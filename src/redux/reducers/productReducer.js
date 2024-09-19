import { createSlice } from '@reduxjs/toolkit'
// createSlice : redux를 만듦

let initialState = {
   productList: [],
   selectedItem: null,
};

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
   name: "product",
   initialState,
   reducers: {
      // 객체를 받는데 함수로 이루어져있다
      getAllProducts(state, action) {
         state.productList=action.payload.data 
      }
      
   }
})

export const productActions = productSlice.actions
export default productSlice.reducer
