import { useParams,  } from "react-router-dom";
import { useState, useEffect } from "react";
import useGetSingleProduct from "../hook/useGetSingleProduct";


const ProductDetails = () => {
  const {productId} = useParams();
  const singleProduct = useGetSingleProduct(productId);

  if(singleProduct === null){
    return (<h1>Loading...</h1>);
  }

  const { image, title, price, rating, description } = singleProduct;

  return singleProduct === null ? (<h1>Loading...</h1>) : (
    <div className="max-w-5xl m-auto mt-10">
      <div className="border border-gray-600 p-5 rounded-md">
        <div className="w-72">
          <img className="w-[100%]" src={image} />
        </div>
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="font-bold text-gray-700">{rating.rate} ratings</p>
        <p className="font-bold text-gray-700">Price: {price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;