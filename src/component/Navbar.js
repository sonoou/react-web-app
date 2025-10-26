import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");

  useEffect(() => {
    // console.log("useEffect from Navbar");
  });

  return (
    <div className="flex justify-between px-10 py-5 shadow-md">
      <h1 className="font-bold text-2xl">AJIO</h1>
      <ul className="flex w-[40%] justify-between items-center">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kid">KID</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/grocery">GROCERY</Link></li>
        <li><Link to="/cart">CART</Link></li>
        <button
          onClick={() => {
            btnName === "Light" ? setBtnName("Dark") : setBtnName("Light");
          }}

          className="bg-purple-600 text-white rounded-md px-6 py-1"
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};
// default export
export default Navbar;
