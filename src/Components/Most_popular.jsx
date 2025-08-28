import "../Styles/Most_popular.css";
import Card from "./Card";

const Most_popular = () => {
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
  ];

  const mapped = products.map((ele, idx) => {
    return <Card Card_products={ele} key={idx} />;
  });

  return (
    <div className="mP_cont">
      <div className="mP_child">
        <div>
          <h1>Most popular Products</h1>
        </div>
        <div className="Card">{mapped}</div>
      </div>
    </div>
  );
};

export default Most_popular;
