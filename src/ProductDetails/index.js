import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/2')
        ;
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        
        setError(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  const { thumbnail, title, brand, price, rating } = product; 

  return (
    <div className='details'>
      <h1>Product Details</h1>
      <div>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <p>{brand}</p>
        <p>{price}</p>
        <h4>{rating}</h4>
      </div>
    </div>
  );
};

export default ProductDetails;
