import React from "react";
import "../Styles/Form_part.css";

const Form_part = () => {
  return (
    <div className="Form_cont">
      {/* Text  */}
      <div className="Form_text">
        <h1>
          Get{" "}
          <span>
            25% <br /> Discount
          </span>{" "}
          on your first purchase
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          ipsam qui esse nostrum architecto accusamus repudiandae. Unde enim
          nemo tenetur.
        </p>
      </div>

      {/* Form */}
      <form action="submit">
        {/* Name */}

        <input type="text" />

        {/* Email */}
        <input type="text" />
      </form>
    </div>
  );
};

export default Form_part;
