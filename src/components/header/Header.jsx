import React from "react";
import "./header.scss";
const Header = (props) => {
  return (
    <div className="wrapper">
      <div className="wrapper__left">
        <img
          className="logo"
          src="https://www.x-wrist.com/_next/image?url=https%3A%2F%2Fassets.x-wrist.com%2Flogo.png&w=96&q=75"
        />
      </div>

      <div className="wrapper__right">
        <div className="menu">
          <div >
            <p className="menu__product">Product</p>
          </div>
          <li>Medical Tests</li>
          <li>Mobile App</li>
          <li>About</li>
          <li>Contact</li>
          <div>
            <p className="menu__business">Business Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
