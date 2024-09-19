function getProducts(searchQuery) {
   return async (dispatch, getState) => {
      let url = `https://my-json-server.typicode.com/jiyoung79/H-M-Clone-coding/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
       console.log(data);
       dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
   };
}

export const productAction = { getProducts };
