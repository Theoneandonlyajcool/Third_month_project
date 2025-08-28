import React from "react";
import Form_part from "../../Components/Form_part";
import Most_popular from "../../Components/Most_popular";

const LandingPage = () => {
  return (
    <div className="Landing_cont">
      <div className="Landing_child">
        <div>
          <Form_part />
        </div>

        <div>
          <Most_popular />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
