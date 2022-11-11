import React from "react";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <Navbar />
      <div
        className="bg-primary"
        style={{
          position: "relative",
          left: "200px",
          top: "50px",
          width: "500px",
          padding: "30px",
          color: "white",
        }}
      >
        <h2>Login:</h2>
        <div style={{ margin: "20px" }} className="form-group ">
          <label htmlFor="email"> Email address </label>
          <input id="email" name="email" type="text" className="form-control" />
        </div>
        <div style={{ margin: "20px" }} className="form-group ">
          <label htmlFor="password"> Password </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
          />
        </div>
        <div style={{ margin: "20px" }} className="form-group ">
          <button
            style={{ position: "relative", left: "320px" }}
            className="btn btn-light text-primary"
          >
            Submit
          </button>
        </div>
        <div style={{marginLeft: "10px", marginTop: "-10px"}} class="form-group form-check">
          <Link
            to="/register"
            style={{ position: "relative", left: "320px" }}
            class="text-light Link"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
