import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <h1 className="display-4">Books And Music</h1>
        <hr className="my-4" />
        <ul className="nav">
          <li className="nav-item">
            <Link className="btn btn-lg btn-primary" style={{marginRight: 10}} aria-current="page" to="/">
              Store
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-lg btn-primary" to="/likes">
              Likes
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
