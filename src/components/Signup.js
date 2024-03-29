import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Signup = (props) => {
  const [loading, setloading] = useState(0);
  let navigate = useNavigate();
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (creds.password !== creds.cpassword) {
      toast.error("Passwords don't match!");
      return;
    }
    const response = await fetch(
      "https://notescloud.onrender.com/api/auth/createuser",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: creds.name,
          email: creds.email,
          password: creds.password,
        }),
      }
    );

    const json = await response.json();
    // console.log(json);

    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      // props.showAlert("Account created successsully", "success");
      toast.success("Account Created Successfully");
    } else {
      // props.showAlert("Invalid Credentials", "danger");
      toast.error("Invalid Credentials");
    }
  };
  const onchange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="name"
            onChange={onchange}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={onchange}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={onchange}
            id="exampleFormControlInput1"
            placeholder="min 6 characters"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="min 6 characters"
            onChange={onchange}
            name="cpassword"
            id="exampleFormControlInput1"
          />
        </div>
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
      </form>
    </div>
  );
};

export default Signup;
