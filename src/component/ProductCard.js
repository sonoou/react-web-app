//named export
import { productList } from "../utils/constant";
import Product from "./Product";

export const ProductCard = () => (
  <div className="product-card">
    {productList.map((product) => {
      return <Product key={product.id} productInfo={product} />;
    })}
  </div>
);