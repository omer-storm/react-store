import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../../features/auth/authSlice'
import "../../App.css";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <React.Fragment>
      <div className="Navbar">
        <h1 className="HeadingText">Books And Music</h1>
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
          {/* <li>
            <Link className="NavText" style={{ marginRight: 15 }} to="/likes">
              Likes
            </Link>
          </li> */}
          <li>
            {user === null ? (
              <Link className="NavText" style={{ marginRight: 15 }} to="/login">
                Login
              </Link>
            ) : (
              <Link
                className="NavText"
                style={{ marginRight: 15 }}
                to="/dashboard"
              >
                Dashboard
              </Link>
            )}
          </li>
          <li>
            {user !== null && (
              <a className="NavText" href="#" onClick={onLogout}>
                Logout
              </a>
            )}
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
