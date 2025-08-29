import React from "react";
import "./Trending_products.css";
import products from "./ProductCardArray";
import Products_card from "./Product_card";
// import pro
import { BiAlignLeft } from "react-icons/bi";
const Trending_product = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "7rem",
        }}
      >
        <div>
          <h1>Trending Products</h1>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <span>ALL</span>
          <span>FRUITS & VEGS</span>
          <span>JUICES</span>
        </div>
      </div>

      <div
        className="name"
        style={{
          display: "flex",
          flexWrap: "Wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {products.map((ele, idx) => (
          <Products_card key={idx} Card_products={ele} />
        ))}
      </div>
    </div>
  );
};

export default Trending_product;
