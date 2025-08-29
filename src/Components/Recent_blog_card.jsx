import { CiCalendar } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";

const Recent_blog_card = (props) => {
  const { products_info } = props;
  console.log(products_info);
  return (
    <div className="Rbc_cont">
      <div className="Rbc_child">
        {/* Image */}
        <div
          className="Rbc_image_holder"
          style={{ backgroundImage: `url(/Images/47_post-thumb-1.jpg.jpeg)` }}
        ></div>

        {/* Content */}
        <div className="Rbc_cnt_holder">
          {/* date and tricks */}
          <div className="d_t">
            {/* Date */}
            <div className="date">
              <CiCalendar />
              <p>{products_info.date}</p>
            </div>

            {/* Category */}

            <div className="Tp_t">
              <CiFolderOn />
              <p>{products_info.category}</p>
            </div>
          </div>

          {/*Heading */}

          <div>
            <h1>{products_info.title}</h1>

            <p>{products_info.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent_blog_card;
