import { useEffect, useState } from "react";
import Product from "./Product";
import Skeleton from "./Skeleton";

export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    console.log(resData);
    setListOfProduct(resData);
  }

  if(listOfProduct.length === 0){
    return <Skeleton/>; 
  }

  return (
    <div>
      <button
        onClick={() => {
          const filteredProduct = listOfProduct.filter((productInfo) => {
            return productInfo.rating.rate >= 4;
          });
          setListOfProduct(filteredProduct);
        }}
        style={{ marginTop: "10px" }}
      >
        Top rated product
      </button>
      <div className="product-card">
        {listOfProduct.map((product) => {
          return <Product key={product.id} productInfo={product} />;
        })}
      </div>
    </div>
  );
};
