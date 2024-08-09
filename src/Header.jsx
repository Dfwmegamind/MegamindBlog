import "./header.css";

const header = () => {
  

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Megamind</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Modern-Office-Interior-with-Open-Floor-Plan-scaled.jpeg"
        alt=""
      />
    </div>
  );
};

export default header;
