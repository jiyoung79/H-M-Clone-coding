import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
   let { id } = useParams();
   const [product, setProduct] = useState(null);

   const getProductDetail = async () => {
      let url = `http://localhost:4000/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setProduct(data); // 데이터 상태 업데이트
   };

   useEffect(() => {
      getProductDetail();
   }, []);

   return (
      <Container className='container'>
         <Row>
            <Col className='product_detail_img'>{product && <img src={product.img} alt={product.title} />}</Col>
            <Col>
               <div className='detail_info'>
                  <div className='detail_title'>{product?.title}</div>
                  <div className='detail_price'>{product?.price}₩</div>
                  <div className='detail_choice'>{product?.choice === true ? 'Conscious choice' : ''}</div>
               </div>
               <Dropdown className='dropdown'>
                  <Dropdown.Toggle variant='success' id='dropdown-basic' className='dropdown_toggle'>
                     사이즈 선택
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='dropdown_menu'>
                     <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
                     <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
                     <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>

           <Button variant='dark' className='product_choice'>주문</Button>
            </Col>
         </Row>
      </Container>
   );
};

export default ProductDetail;
