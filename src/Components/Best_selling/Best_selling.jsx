import Every_card from ".././Card";
import "../../Styles/Most_popular.css";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
const Best_selling = () => {
  const [sliceStartIdx, SetsliceStartIdx] = useState(0);
  const [sliceEndIdx, SetsliceEndIdx] = useState(4);

  const products = [
    {
      img: "/Images/28_thumb-tomatoes.png",
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
      discount: "-15%",
    },
    {
      img: "/Images/48_product-thumb-2.png",
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
    },
    {
      img: "/Images/44_thumb-bananas.png",
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
    },
    {
      img: "/Images/44_thumb-bananas.png",
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
    },
    {
      img: "/Images/28_thumb-tomatoes.png",
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
      discount: "-15%",
    },
    {
      img: "/Images/48_product-thumb-2.png",
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
    },
    {
      img: "/Images/44_thumb-bananas.png",
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
    },
    {
      img: "/Images/44_thumb-bananas.png",
      title: "Sunstar Fresh Melon Juice",
      unit: "1 UNIT",
      rating: 4.5,
      price: 18.0,
    },
  ];

  const mapped = products.slice(sliceStartIdx, sliceEndIdx).map((ele, idx) => {
    return <Every_card Card_products={ele} key={idx} />;
  });

  return (
    <div className="mP_cont">
      <div className="mP_child">
        <div className="Mp_heading">
          <div>
            <h1>Best Selling</h1>
          </div>

          {/* View categories */}
          <div className="View_cat_cont">
            <div className="view_cat_child">
              <h3>view all Categories</h3>
              <HiArrowLongRight className="long_arr" />
            </div>

            {/* products add and sub */}
            <div className="add_sub">
              {/* left */}
              <div
                className="Chg_pro_arr"
                onClick={() => {
                  if (sliceStartIdx <= 0) {
                  } else {
                    SetsliceStartIdx(sliceStartIdx - 1);
                    SetsliceEndIdx(sliceEndIdx - 1);
                  }
                }}
              >
                <FaChevronLeft />
              </div>

              {/* Right */}
              <div
                className="Chg_pro_arr"
                onClick={() => {
                  if (sliceEndIdx >= products.length - 1) {
                  } else {
                    SetsliceEndIdx(sliceEndIdx + 1);
                    SetsliceStartIdx(sliceStartIdx + 1);
                  }
                }}
              >
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>

        <div className="Card">{mapped}</div>
      </div>
    </div>
  );
};

export default Best_selling;
