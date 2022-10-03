import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <h1 className="HeadingText" >Books And Music</h1>
        <ul>
          <li>
            <Link
              className="NavText"
              style={{ marginRight: 15 }}
              aria-current="page"
              to="/"
            >
              Store
            </Link>
          </li>
          <li>
            <Link className="NavText" to="/likes">
              Likes
            </Link>
          </li>
        </ul>
      </div>
      <span className="LineBreak" />
    </React.Fragment>
  );
};

// const style = {
 
//   break: {
//     display: "block",
//     backgroundColor: "#f1f1f1",
//     height: 1,
//     width: 900,
//     marginTop: -10,
//     marginBottom: 20,
//   },
// };

//#e9e9e9,#f1f1f1
export default Navbar;
