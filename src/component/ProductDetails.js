import { useParams,  } from "react-router-dom";
import { useState, useEffect } from "react";


const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${param.productId}`);
    const resData = await data.json();
    console.log(resData);
    setSingleProduct(resData);
  };

  if(singleProduct === null){
    return (<h1>Loading...</h1>);
  }

  const { image, title, price, rating } = singleProduct;

  return singleProduct === null ? (<h1>Loading...</h1>) : (
    <div className="product">
      <div className="product-img-container">
        <img className="product-img" src={image} />
      </div>
      <h4>{title}</h4>
      <p>{rating.rate} ratings</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default ProductDetails;