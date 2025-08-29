import React from "react";
import "./Footer.css";
import { FaFacebookF ,FaAmazon} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Social Links */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src="https://themewagon.github.io/FoodMart/images/logo.png" alt="FoodMart Logo" />
            <p>GROCERY STORE</p>
          </div>
          <div className="social-icons">
            {/* <a href="#"><i className="fab fa-facebook-f"></i></a> */}
           < FaFacebookF className="fab fa-facebook-f"/>
             <CiTwitter className="fab fa-twitter"/>
             <CiYoutube className="fab fa-youtube" />
             <IoLogoInstagram className="fab fa-instagram"/>
             <FaAmazon  className="fab fa-amazon"/>
          </div>
        </div>

        {/* Ultras */}
        <div className="footer-section">
          <h4>Ultras</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Conditions</a></li>
            <li><a href="#">Our Journals</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Affiliate Programme</a></li>
            <li><a href="#">Ultras Press</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Cookie Guidelines</a></li>
            <li><a href="#">Delivery Information</a></li>
          </ul>
        </div>

        {/* Customer Service Duplicate */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Cookie Guidelines</a></li>
            <li><a href="#">Delivery Information</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="footer-section">
          <h4>Subscribe Us</h4>
          <p>Subscribe to our newsletter to get updates about our grand offers.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2023 Foodmart. All rights reserved.</p>
        <p>
          Free HTML Template by <a href="#">TemplatesJungle</a> Distributed by{" "}
          <a href="#">ThemeWagon</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
