import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");

  useEffect(() => {
    // console.log("useEffect from Navbar");
  });

  return (
    <div className="navbar">
      <h1>LOGO</h1>
      <ul className="menu-items">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kid">KID</Link></li>
        <li><Link to="/cart">CART</Link></li>
        <li><Link to="/grocery">GROCERY</Link></li>
        <li><Link to="/about">About</Link></li>
        <button
          onClick={() => {
            btnName === "Light" ? setBtnName("Dark") : setBtnName("Light");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};
// default export
export default Navbar;
