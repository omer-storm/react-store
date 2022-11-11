import React from "react";
import Navbar from "../components/common/Navbar";

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
        <h2>Register:</h2>
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
        <div style={{ margin: "20px" }} class="form-group">
          <button
            style={{ position: "relative", left: "320px" }}
            class="btn btn-light text-primary"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
