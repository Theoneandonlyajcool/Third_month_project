import React from "react";
import Form_part from "../../Components/Form_part";
import Most_popular from "../../Components/Most_popular";
import Just_arrived from "../../Components/Just_arrived";
import Our_Recent_blog from "../../Components/Our_Recent_blog";
import Hero from "../../Components/Hero";
import Shop_faster from "../../Components/Shop_faster";
import New_features from "../../Components/New_featurs";
import Header from "../../Components/Header/Header";
import Sheader from "../../Components/SHeader/Sheader";
import Category from "../../Components/Category/Category";
import ArrivedSextion from "../../Components/Arrived/ArrivedSextion";
import Trending_product from "../../Components/Product/Trending_product";
import The_arr from "../../Components/Hero_bg_arr";
import Best_selling from "../../Components/Best_selling/Best_selling";
import ShowSection from "../../Components/Show/ShowSection";
import Buttons from "../../Components/Buttons/Button";
import Footer from "../../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="Landing_cont">
      <div className="Landing_child">
        <div>
          <Header />
        </div>

        <div>
          <Sheader />
        </div>

        <div>
          <Hero />
        </div>
        <div>{/* <Form_part /> */}</div>

        <div>
          <Category />
        </div>

        <div>
          <ArrivedSextion />
        </div>

        <div>
          <Trending_product />
        </div>

        <div>
          <ShowSection />
        </div>

        <div>
          <Best_selling />
        </div>

        <div>
          <Most_popular />
        </div>

        <div>
          <Just_arrived />
        </div>

        <div>
          <Our_Recent_blog />
        </div>

        <div>
          <Shop_faster />
        </div>

        <div>
          <Buttons />
        </div>

        <div>
          <New_features />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
