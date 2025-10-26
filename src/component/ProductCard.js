import { useEffect, useState } from "react";
import Product, { BestSellerProduct } from "./Product";
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

  const BestSeller = BestSellerProduct(Product);

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div className="mt-10 flex space-x-10 mx-5">
        <div>
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            className="border border-gray-700 rounded-md p-2"
          />
          <button
            onClick={() => {
              const filteredData = allProduct.filter((product) => {
                return product.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setListOfProduct(filteredData);
            }}
            className="bg-purple-600 text-white rounded-md px-6 py-2"
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
          className="bg-purple-600 text-white rounded-md px-6 py-2"
        >
          Top rated product
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap mt-3">
        {listOfProduct.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              {
                product.rating.rate >= 4 ? <BestSeller productInfo={product} /> : <Product productInfo={product} />
              }
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};
