import React, { useState } from "react";
// import "./Category.css"
import Arrived from "../Arrived/Arrived";
import ArrivedArray from "../Arrived/ArrivedArray";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArrivedSextion = () => {
  const [sliceStartIndex, setSliceStartIndex] = useState(0);
  const [sliceEndindex, setSliceEndIndex] = useState(3);
  return (
    <div>
      {/* categories */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "3rem",
        }}
      >
        <div>
          <h1>Newly Arrived Brands</h1>{" "}
        </div>
        {/*Categories increament */}
        <div
          style={{
            display: "flex",
            width: "15rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <p>View All</p>
            <LiaLongArrowAltRightSolid />
          </div>
          {/* Add increament */}
          <div style={{ display: "flex", width: "30%", gap: "10px" }}>
            {/* left button */}
            <div
              style={{
                width: "2rem",
                height: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                if (sliceStartIndex <= 0) {
                } else {
                  setSliceStartIndex(sliceStartIndex - 1);
                  setSliceEndIndex(sliceEndindex - 1);
                }
              }}
            >
              <FaChevronLeft />
            </div>
            {/* Right */}
            <div
              style={{
                width: "2rem",
                height: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                if (sliceEndindex >= ArrivedArray.length - 1) {
                } else {
                  setSliceStartIndex(sliceStartIndex + 1);
                  setSliceEndIndex(sliceEndindex + 1);
                }
              }}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        {ArrivedArray.slice(sliceStartIndex, sliceEndindex).map((ele, idx) => (
          <Arrived key={ele.id} brands={ele} />
        ))}
      </div>
    </div>
  );
};

export default ArrivedSextion;
