import React from "react";
import "./ShowSection.css";

const ShowSection = () => {
  return (
    <div className="showcase-container">
      {/* Left Card */}
      <div className="showcase-card chocolate">
        <div className="showcase-text">
          <p className="offer">Upto 25% Off</p>
          <h2>Luxa Dark Chocolate</h2>
          <p className="desc">Very tasty & creamy vanilla flavour creamy muffins.</p>
          <button>SHOW NOW</button>
        </div>
        <div className="showcase-img">
          <img src="/Images/ad-image-3.png" alt="Chocolate" />
        </div>
      </div>

      {/* Right Card */}
      <div className="showcase-card muffins">
        <div className="showcase-text">
          <p className="offer">Upto 25% Off</p>
          <h2>Creamy Muffins</h2>
          <p className="desc">Very tasty & creamy vanilla flavour creamy muffins.</p>
          <button>SHOW NOW</button>
        </div>
        <div className="showcase-img">
          <img src="/Images/ad-image-4.png" alt="Muffins" />
        </div>
      </div>
    </div>
  );
};

export default ShowSection;
