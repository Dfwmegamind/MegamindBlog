import "./sidebar.css"

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJmPm9j3m3mcgNVWqpuV2CYS21R-z4ko0Ow&s" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ab consequatur nulla in reiciendis. </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Sport</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-x-twitter"></i>
        <i className="sidebarIcon fa-brands fa-tiktok"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default sidebar
