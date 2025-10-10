const Product = (props) => {
  const { image, title, price, rating } = props.productInfo;
  return (
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
export default Product;