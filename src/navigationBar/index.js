import React from "react";
import './nav.css';
const Navbar = () => {
  return (
    <nav >
      <ul>
      <li>
          <a href="/"> Login</a>
        </li>
        <li>
          <a href="/Products">Products</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;