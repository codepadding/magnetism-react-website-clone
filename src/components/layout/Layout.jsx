import React from "react";
import Header from "../header/Header";
import "./layout.scss";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      {children}
      
    </div>
  );
};

export default Layout;
