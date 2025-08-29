import React from "react";
import "../Styles/Our_Recent_blog.css";
import Recent_blog_card from "./Recent_blog_card";
import { FaArrowRight } from "react-icons/fa";

const Our_Recent_blog = () => {
  const blogPosts = [
    {
      date: "22 AUG 2021",
      category: "TIPS & TRICKS",
      title: "Top 10 casual look ideas to dress up your kids",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
      image: "fruits.jpg", // replace with actual image path
    },
    {
      date: "25 AUG 2021",
      category: "TRENDING",
      title: "Latest trends of wearing street wears supremely",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, unde voluptates distinctio molestias nam quaerat molestiae quas impedit nobis recusandae soluta quia ad adipisci, consequatur pariatur autem magnam delectus quod eum aliquam voluptate facilis quam corporis. Fuga suscipit doloribus voluptatibus.",
      image: "cashew-butter.jpg", // replace with actual image path
    },
    {
      date: "28 AUG 2021",
      category: "INSPIRATION",
      title: "10 Different Types of comfortable clothes ideas for women",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus autem porro suscipit culpa aut impedit quasi alias fuga quidem quo temporibus numquam tempore cumque quisquam laborum laboriosam, deleniti enim distinctio praesentium reiciendis velit, possimus dignissimos? Ad qui nobis porro atque, beatae at eligendi",
      image: "broccoli.jpg", // replace with actual image path
    },
  ];

  return (
    <div className="Recent_blog_cont">
      <div className="Recent_blog_child">
        <div className="Rb_cont">
          <div>
            <h1>Our Recent Blog</h1>
          </div>

          {/* Articles */}
          <div className="Rb_articles">
            <p>Read all Articles</p>
            <FaArrowRight />
          </div>
        </div>

        {/* Card */}

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          {blogPosts.map((ele, idx) => {
            return <Recent_blog_card products_info={ele} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Our_Recent_blog;
