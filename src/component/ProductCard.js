import { useEffect, useState } from "react";
import Product from "./Product";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    setListOfProduct(resData);
    setAllProduct(resData);
  };

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          onClick={() => {
            const filteredData = allProduct.filter((product) => {
              return (product.title.toLowerCase().includes(searchText.toLowerCase()));
            });
            setListOfProduct(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const filteredProduct = allProduct.filter((productInfo) => {
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
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
            <Product productInfo={product} />
            </Link>
            
          );
        })}
      </div>
    </div>
  );
};
