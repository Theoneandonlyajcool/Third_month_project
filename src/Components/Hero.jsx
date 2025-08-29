import "../Styles/Hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = (props) => {
  return (
    <div
      className="Hero_cont"
      style={{
        backgroundImage: "url(public/Images/49_background-pattern.jpg.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        padding: ".5rem",
      }}
    >
      {/* big image */}
      <div
        className="big_img"
        style={{
          backgroundImage: `url(${"public/Images/30_product-thumb-1.png"})`,
        }}
      >
        <div className="big_img_child">
          <div>
            <p className="natural">100% Natural</p>
          </div>

          <div>
            <h1>
              Fresh <br />
              Smoothie & <br /> Summer Juice
            </h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              quo pariatur recusandae soluta quia corporis!
            </p>
          </div>

          {/* Btn */}
          <div>
            <button className="Hb_btn">Shop Now</button>
          </div>
        </div>
      </div>

      {/* two small images */}
      <div className="other_images">
        {/* First one */}
        <div className="first_image">
          <p>20% off</p>
          <div className="f_i_line">
            {/* Horizintal line */}
            <div className="line"></div>
            <p>SALE</p>
          </div>
          <h1>Fruits & Vegetables</h1>

          {/* Shop collction */}
          <p>
            Shop Collection <FaArrowRight />{" "}
          </p>
        </div>

        {/* Second one */}
        <div className="second_image">
          <p>15% off</p>
          <div className="f_i_line">
            {/* Horizintal line */}
            <div className="line"></div>
            <p>SALE</p>
          </div>
          <h1>Baked Products</h1>

          {/* Shop collction */}
          <p>
            Shop Collection <FaArrowRight />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
