import React from 'react';

const ProductCard = ({ item }) => {
   return (
      <div className='product_card'>
         <img src={item?.img} className='product_img' />
         <div>Conscious choice</div>
         <div>{item?.title}</div>
         <div>₩{item?.price}</div>
         <div>{item?.new === true ? '신제품' : ''}</div>
      </div>
   );
};

export default ProductCard;
