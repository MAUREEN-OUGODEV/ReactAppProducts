import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails= () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);
  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className='productDetailss'>
      <h1 className='dt'>Product Details</h1>
      <div >
        <img src={product.image} alt={product.title} />
        <h2>name:{product.title}</h2>
        <p>Description:{product.description}</p>
        <p>Brand:{product.brand}</p>
        <p>Price:{product.price}</p>
        <h4>Ratings:{product.rating}</h4>
        <h4>Stock:{product.stock}</h4>
      </div>
    </div>
  );
};
export default ProductDetails;