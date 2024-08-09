import "./post.css";

const post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.vox-cdn.com/thumbor/KA23i52Q1953XDw1_87hpmii6Jc=/0x0:2040x1360/768x768/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24931305/236791_Apple_iPhone_15_and_15_Plus_review_DSeifert_0008.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postPhones">
          <span className="postphone">Music</span>
          <span className="postphone"> & Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere
        neque alias, sint quidem nam quisquam voluptatibus nesciunt doloribus
        rerum distinctio, repellendus nostrum vero atque repudiandae deleniti
        praesentium molestias sequi.
      </p>
    </div>
  );
};

export default post;
