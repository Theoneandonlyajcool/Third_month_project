import "../Styles/Shop_faster.css";

const Shop_faster = () => {
  return (
    <div className="Shop_faster_cont">
      {/* Background image */}
      <div className="Shop_faster_image"></div>

      {/* Background content  */}
      <div className="bg">
        <div className="bg_content">
          {/* Heading */}
          <div className="heading">
            <h1>Shop faster with foodmart App</h1>
          </div>

          {/* Paragraph */}
          <div className="paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit
              iaculis amet, ac urna. Adipiscing fames semper erat ac in
              suspendisse iaculis. Amet blandit tortor praesent ante vitae. A,
              enim pretiummi senectus magna. Sagittis sed ptibus liberolectus
              non et psryroin.
            </p>
          </div>

          {/* Image */}

          <div className="images_holder">
            <img src="/Images/55_app-store.jpg.jpeg" alt="" />
            <img src="/Images/52_google-play.jpg.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_faster;
