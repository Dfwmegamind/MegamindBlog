import { Link } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-tiktok"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <li className="topListItem">
              {user ? (
                <>
                  <Link to="/" className="link">
                    LOG  OUT
                  </Link> 
                  <Link to="/settings" className="link">
                   UPDATE PROFILE
                  </Link>
                </>
              ) : (
                <Link to="/" className="link">
                  LOGIN
                </Link>
              )}
            </li>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            src="https://media.glamour.com/photos/6544ffce1cbc1ca9affc7adf/master/w_2560%2Cc_limit/GettyImages-1312113099.jpg"
            className="topImg"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li>
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
