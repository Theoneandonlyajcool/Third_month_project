import React from "react";
import "./Hero.css";
import HeroPart from "./HeroPart";
import HeroArray from "../Hero/HeroArray";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="HeroWrapper">
        <div
          style={{ backgroundColor: "purple", width: "40rem", height: "40rem" }}
        >
          {HeroArray.map((ele) => (
            <HeroPart key={ele.id} item={ele} />
          ))}

          {/* <HeroPart item={HeroArray[2]}/> */}
        </div>

        <div className="secondHerpart">
          <div className="secondPrtHero1"></div>
          <div className="secondPrtHero2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
