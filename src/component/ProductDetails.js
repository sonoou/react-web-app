import { useParams,  } from "react-router-dom";
import { useState, useEffect } from "react";
import useGetSingleProduct from "../hook/useGetSingleProduct";


const ProductDetails = () => {
  const {productId} = useParams();
  const singleProduct = useGetSingleProduct(productId);

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