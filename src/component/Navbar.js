import { useEffect, useState } from "react";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");

  console.log("Navbar rendered");

  useEffect(() => {
    console.log("useEffect from Navbar");
  });
  return (
    <div className="navbar">
      <h1>LOGO</h1>
      <ul className="menu-items">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>CART</li>
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
