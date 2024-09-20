import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productReducer';

const ProductAll = () => {
   const productList = useSelector(state => state.product.productList);
   const [query, setQuery] = useSearchParams();
   const dispatch = useDispatch();
   const getProducts = () => {
      let searchQuery = query.get('q') || '';
      console.log('쿼리값은? : ', searchQuery);
      dispatch(fetchProducts(searchQuery)); // 이렇게 하면 미들웨어를 거쳐감
   };
   useEffect(() => {
      getProducts();
   }, [query]);

   return (
      <div>
         <Container>
            <Row>
               {productList.map(menu => (
                  <Col lg={3}>
                     <ProductCard item={menu} />
                  </Col>
               ))}
            </Row>
         </Container>
      </div>
   );
};

export default ProductAll;
