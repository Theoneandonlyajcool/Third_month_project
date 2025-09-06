import { useState } from "react";
import "./Another_Card.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Another_Card = ({ Card_products }) => {
  const [Ac_counter, SetAC_counter] = useState(1);

  return (
    <div className="Ac_card_cont">
      <div className="Ac_card_child">
        {/* Image  */}
        <div
          className="Ac_card_image_cont"
          style={{ backgroundImage: `url(${Card_products.img})` }}
        >
          {/* discount */}
          <div className="Ac_card_discount_holder">
            <p>-15%</p>
          </div>

          {/* Heart icon */}
          <div className="Ac_card_heart_icon_holder">
            <IoMdHeartEmpty className="Ac_heart_icon" />
          </div>
        </div>

        {/* Content */}
        <div className="Ac_card_content_holder">
          {/* Name */}
          <h3 className="product_name">Sunstar Fresh Melon Juice</h3>

          {/* Unit and rating */}
          <div className="Ac_card_unit_rating">
            {/* unit */}

            <div>1 unit</div>

            {/* Rating */}

            <div className="Ac_card_rating">
              <FaStar className="Ac_card_star" />
              <p>4.5</p>
            </div>
          </div>

          {/* Price */}
          <h1>$18.00</h1>

          {/* counter and add to cart */}

          <div className="Ac_card_counter_part">
            {/* Counter */}

            <div className="Ac_card_counter_holder">
              <div
                style={{
                  border: "1px solid gray",
                  width: "2rem",
                  height: "1.5rem",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: ".3rem",
                }}
                onClick={() => {
                  if (Ac_counter >= 1) {
                    SetAC_counter(Ac_counter - 1);
                  } else {
                  }
                }}
              >
                <p>-</p>
              </div>
              <div>{Ac_counter}</div>
              <div
                style={{
                  border: "1px solid gray",
                  width: "2rem",
                  height: "1.5rem",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: ".3rem",
                }}
                onClick={() => SetAC_counter(Ac_counter + 1)}
              >
                +
              </div>
            </div>

            {/* Add to cart */}
            <p>Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Another_Card;
