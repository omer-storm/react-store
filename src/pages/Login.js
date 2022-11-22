import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";
import { login, reset } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

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
        <form onSubmit={onSubmit}>
          <div style={{ margin: "20px" }} className="form-group ">
            <label htmlFor="email"> Email address </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter Password"
              onChange={onChange}
            />
          </div>
          <div style={{ margin: "20px" }} className="form-group ">
            <label htmlFor="password"> Password </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              className="form-control"
              placeholder="Enter Password"
              onChange={onChange}
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
        </form>
        <div
          style={{ marginLeft: "10px", marginTop: "-10px" }}
          className="form-group form-check"
        >
          <Link
            to="/register"
            style={{ position: "relative", left: "320px" }}
            className="text-light Link"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
