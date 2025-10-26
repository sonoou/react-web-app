const Product = (props) => {
  const { image, title, price, rating } = props.productInfo;
  return (
    <div className="border border-gray-600 p-3 m-1 w-52 hover:bg-gray-200">
      <div className="w-40 h-72 grid items-center">
        <img className="w-[100%]" src={image} />
      </div>
      <div className="text-nowrap overflow-hidden">
        <h4>{title}</h4>
      </div>
      <p>{rating.rate} ratings</p>
      <p>Price: {price}</p>
    </div>
  );
};
export default Product;

export const BestSellerProduct = (Product) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute -top-1 bg-black text-white text-sm px-2  rounded-md">
          Best Seller
        </span>
        <Product {...props} />
      </div>
    );
  };
}; 