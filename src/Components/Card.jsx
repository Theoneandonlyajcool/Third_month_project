import "../Styles/Card.css";
import Card_bg_image from "/Images/48_product-thumb-2.png";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Card = (props) => {
  const { Card_products } = props;
  console.log(Card_products);
  return (
    <div className="Card_cont">
      <div className="Card_child">
        {/* Image */}

        <div
          className="image_holder"
          style={{
            backgroundImage: `url(${Card_products.img})`,
          }}
        >
          {/* Discount */}
          <div className="Card_discount">
            <p>-15%</p>
          </div>

          {/* heart icon */}
          <div className="Heart_icon_holder">
            <FaRegHeart className="Heart_icon" />
          </div>
        </div>

        {/* Text price .... */}
        <div className="text_cnt">
          {/* Description*/}
          <div className="Card_desc">
            <h4>Sunstar Fresh Melon Juice</h4>
          </div>

          {/* unit and rating */}
          <div className="unit_rating">
            <p>1 unit</p>
            {/* rating */}
            <div className="rating">
              <FaStar className="rating_star" />
              <p>4.5</p>
            </div>
          </div>

          {/* Price */}
          <div className="card_price">
            <p>$18.00</p>
          </div>

          {/*  Add to cart*/}
          <div className="Add_to_cart">
            {/* Sub and add btn */}
            <div className="sub_add_cont">
              {/* Sub */}
              <div className="Counter_btn">
                <p>-</p>
              </div>
              {/* Counter */}
              <p>1</p>
              <div className="Counter_btn">
                <p>+</p>
              </div>
            </div>

            {/* add to cart text */}
            <div>
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
