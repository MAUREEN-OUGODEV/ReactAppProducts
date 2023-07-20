import React , {useState,useEffect} from 'react';
import './style.css';
import {Link} from'react-router-dom';


function Products() {
    const[products,setProducts]= useState([]);
    const[loading,setLoading] = useState(false);
   useEffect(() =>{
    (async()=>{
      await getProducts()
    })()
   },[]);
   console.log({Products});
    const getProducts=async()=>{
        try{
          setLoading(true)
           const response =await fetch('https://dummyjson.com/products')
           const result=await response.json()
           setProducts(result.products)
           setLoading(false)


        }  
        catch (error) {
          console.log(error.message)
      
      }
    }
      if(loading) {
        return <p>Loading...</p>
      }
       
  return (
    <div >
    <h1 className='product'>All products</h1>
    <div className='products'>
    {products.map(item =>(
        <div key={item.id}>
          
        <Link to={'/products/{item.id}'}>
        <img src={item.images[0]} alt="images" className='image'/> 
        </Link> 

        <h3>Title:{item.title}</h3>
        <p>Price:{item.price}</p>
        
        <p>Discount:{item.discountPercentage} </p>
        <button className='button'> +Add Product</button>
        
        </div>
    ))}
    </div>
</div>
  )
}
export default Products
