import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Login.css";
const Login = () => {
  const [loading, setLoading] = useState(0);
  let navigate = useNavigate();
  const [creds, setCreds] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(1);

    const response = await fetch(
      "https://notescloud.onrender.com/api/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      }
    );

    const res = await response.json();
    // console.log(res);
    if (res.success) {
      // redirect
      localStorage.setItem("token", res.authtoken);
      navigate("/");
      // props.showAlert("Account created successsully", "success");
      toast.success("Success");
    } else {
      // props.showAlert("Invalid details", "danger");
      toast.error(res.error);
    }
    setLoading(0);
  };
  const onchange1 = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <div className="d-flex row justify-content-center items-center">
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={creds.email}
            onChange={onchange1}
            required
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={creds.password}
            required
            onChange={onchange1}
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          {loading ? (
            <button type="submit" className="btn btn-primary ">
              <CircularProgress size={38} color="warning" />
              {/* Submit */}
            </button>
          ) : (
            <button type="submit" className="btn btn-primary py-3">
              Submit
              {/* <CircularProgress size={35} color="warning" /> */}
            </button>
          )}
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="new-user text-left">
          New User ? <Link to="/signup">Signup</Link> here.
        </p>
      </form>
    </div>
  );
};

export default Login;
