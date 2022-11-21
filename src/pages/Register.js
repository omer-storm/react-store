import React from "react";
import { useState } from "react";
import Navbar from "../components/common/Navbar";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { name, email, password, password2 } = formData;

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
        <div style={{ margin: "10px" }} className="form-group ">
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={name}
            placeholder="Enter Name"
            onChange={onChange}
          />
        </div>
        <div style={{ margin: "10px" }} className="form-group ">
          <label htmlFor="email"> Email address </label>
          <input
            id="email"
            name="email"
            type="text"
            className="form-control"
            value={email}
            placeholder="Enter Email"
            onChange={onChange}
          />
        </div>
        <div style={{ margin: "10px" }} className="form-group ">
          <label htmlFor="password"> Password </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            value={password}
            placeholder="Enter Password"
            onChange={onChange}
          />
        </div>
        <div style={{ margin: "10px" }} className="form-group ">
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input
            id="confirmPassword"
            name="password2"
            type="text"
            className="form-control"
            value={password2}
            placeholder="Confirm Password"
            onChange={onChange}
          />
        </div>
        <div style={{ margin: "20px" }} className="form-group">
          <button
            style={{ position: "relative", left: "320px" }}
            className="btn btn-light text-primary"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
