import "./singlepost.css";

const singlePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://www.zdnet.com/a/img/resize/8b5a12b9b5fd58fd1943604699993f1e6469be19/2023/08/22/71f6e0b9-3405-43ea-972c-202a7c8bf615/best-phones-zdnet-thumb-image.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Michael</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          architecto quisquam cupiditate excepturi aut, omnis eos, delectus
          aliquam exercitationem nulla rerum ducimus. Quos magnam blanditiis
          vero eos ipsum praesentium rem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos architecto quisquam cupiditate excepturi aut,
          omnis eos, delectus aliquam exercitationem nulla rerum ducimus. Quos
          magnam blanditiis vero eos ipsum praesentium rem. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quos architecto quisquam
          cupiditate excepturi aut, omnis eos, delectus aliquam exercitationem
          nulla rerum ducimus. Quos magnam blanditiis vero eos ipsum praesentium
          rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          architecto quisquam cupiditate excepturi aut, omnis eos, delectus
          aliquam exercitationem nulla rerum ducimus. Quos magnam blanditiis
          vero eos ipsum praesentium rem.
        </p>
      </div>
    </div>
  );
};

export default singlePost;
