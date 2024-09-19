import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
   return async (dispatch, getState) => {
      let url = `https://my-json-server.typicode.com/jiyoung79/H-M-Clone-coding/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
       console.log(data);
      //  dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
      dispatch(productActions.getAllProducts({data}));
      // 더이상 action 객체를 만들 필요 없이 그냥 action 함수를 호출
      // 매개변수로 전달된 값은 알아서 payload 필드 아래로 들어가게됨
   };
}


export const productAction = { getProducts };
