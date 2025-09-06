import React, { useState } from "react";
import "./Sheader.css";
import { MdArrowDropDown } from "react-icons/md";
const Sheader = () => {
  const [pageDropDown, setPageDropDown] = useState(false);
  return (
    <div>
      <div className="S-HeaderWrapper">
        <div className="S-HeaderContainer">
          <div className="shopCategory">
            <select className="shopCategory">
              <option value="">Shop by Departments</option>
              <option value="">Groceries</option>
              <option value="">Drinks</option>
              <option value="">Chocolates</option>
            </select>
          </div>
          <div className="S-Listed_Section">
            <ul className="listedTags">
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
              <li>Accessories</li>
              <div
                className="pageSec"
                onClick={() => setPageDropDown(!pageDropDown)}
              >
                <li>Pages </li>
                <MdArrowDropDown
                  style={{ cursor: "pointer" }}
                  className="Dropdown"
                />
                {pageDropDown && (
                  <div className="pageDrop">
                    <ul>
                      <li>
                        <p>About Us</p>
                      </li>
                      <li>
                        <p>Shop</p>
                      </li>
                      <li>
                        <p>Single Product</p>
                      </li>
                      <li>
                        <p>Cart</p>
                      </li>
                      <li>
                        <p>Checkout</p>
                      </li>
                      <li>
                        <p>Blog</p>
                      </li>
                      <li>
                        <p>Single Post</p>
                      </li>
                      <li>
                        <p>Styles</p>
                      </li>
                      <li>
                        <p>Contact</p>
                      </li>
                      <li>
                        <p>Thank you</p>
                      </li>
                      <li>
                        <p>My Account</p>
                      </li>
                      <li>
                        <p>404 Error</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <li>Brand</li>
              <li>Sale</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheader;
