import "./single.css"
import Sidebar from "../src/Sidebar"
import SinglePost from "./SinglePost"

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single
