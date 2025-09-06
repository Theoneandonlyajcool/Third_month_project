import React, { useState } from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { LuUserRound, LuHeart } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  const [menuSideBar, setMenuSideBar] = useState(false);
  return (
    <div>
      <div className="headerBody">
        <div className="headerWrapper">
          {/* mobile menu  */}

          {menuSideBar && (
            <div className="menuDrop">
              <div className="cancel">
                <FaXmark
                  className="Xmark"
                  onClick={() => setMenuSideBar(!menuSideBar)}
                />
              </div>
              <div className="departmentCategory">
                <select className="departmentCategory">
                  <option value="">Shop by Departments</option>
                  <option value="">Groceries</option>
                  <option value="">Drinks</option>
                  <option value="">Chocolates</option>
                </select>
              </div>
              <div className="listing">
                <ul>
                  <li>Women</li>
                  <li>Men</li>
                  <li>Kids</li>
                  <li>Accessories</li>
                  <li>Pages</li>
                  <li>Brand</li>
                  <li>Sale</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          )}

          <div className="logo">
            <img src="/Images/36_logo.png" alt="" />
          </div>
          <div className="inputs">
            <div className="firstCategory.">
              <select className="firstCategory">
                <option value="">All Categories</option>
                <option value="">Groceries</option>
                <option value="">Drinks</option>
                <option value="">Chocolates</option>
              </select>
            </div>
            <div className="input_holder">
              <input
                type="text"
                placeholder="Search for more than 20,000 products"
              />
            </div>
            <div className="searchIcon">
              <FiSearch style={{ fontSize: "23px" }} />
            </div>
          </div>
          <div className="contact">
            <span>For Support?</span>
            <p>+980-34984089</p>
          </div>
          <div className="icons">
            <div className="profile_icon">
              <LuUserRound style={{ cursor: "pointer" }} />
            </div>
            <div className="heart_icon">
              <LuHeart style={{ cursor: "pointer" }} />
            </div>
            <div className="cart-icon">
              <IoCartOutline />
            </div>
            <div className="search-icon">
              <FiSearch />
            </div>
          </div>
          <div
            className="cartWrapper"
            style={{ cursor: "pointer" }}
            onClick={() => setSideBar(!sidebar)}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>Your Cart</p>
              <MdOutlineArrowDropDown />
            </div>
            <span>$1256.00</span>
          </div>

          {/* Side bar */}

          {sidebar && (
            // Side drop background
            <div className="menudrop_bg">
              <div className="cartDrop">
                <div className="markSec">
                  <FaXmark
                    className="mark"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSideBar(!sidebar)}
                  />
                </div>
                <div className="items">
                  <h4>Your cart</h4>
                  <div className="cartCount">
                    <h3>3</h3>
                  </div>
                </div>
                <div className="cart-items">
                  <aside
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5>Growers cider</h5>
                    <span>$12</span>
                  </aside>
                  <p>Brief description</p>
                </div>
                <div className="cart-items">
                  <aside
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5>Fresh Grapes</h5>
                    <span>$8</span>
                  </aside>
                  <p>Brief description</p>
                </div>
                <div className="cart-items">
                  <aside
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5>Heinz tomato ketchup</h5>
                    <span>$5</span>
                  </aside>
                  <p>Brief description</p>
                </div>
                <div className="cart-itemss">
                  <aside
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Total (USD)</p>
                    <span>$20</span>
                  </aside>
                </div>

                {/* Check out button */}
                <div className="check_out_btn_holder">
                  <button className="check_out_btn">
                    {" "}
                    Continue to checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="menu-icon">
          <IoMenuOutline
            className="menu"
            onClick={() => setMenuSideBar(!menuSideBar)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
