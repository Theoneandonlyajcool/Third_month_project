import React from "react";
import "../Styles/Features.css"; // external css
import {
  FaShoppingCart,
  FaShieldAlt,
  FaStore,
  FaMapMarkerAlt,
  FaGift,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsChatHeart } from "react-icons/bs";
import { CiGift } from "react-icons/ci";

const features = [
  {
    icon: <MdOutlineShoppingCart />,
    title: "Free delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    icon: <MdOutlineVerifiedUser />,
    title: "100% secure payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    icon: <AiOutlineShop />,
    title: "Quality guarantee",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    icon: <BsChatHeart />,
    title: "guaranteed savings",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    icon: <CiGift />,
    title: "Daily offers",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
];

const New_features = () => {
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-box">
          <div className="icon">{feature.icon}</div>
          <div className="content">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default New_features;
