import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (res.data.message) {
        toast(res.data.message);
        console.log(res.data.message);
      }
      if (!res.status === 200) {
        toast(res.data.message);
      }
      if (res.data.token) {
        console.log(res.data.token);
        res.data && window.location.replace("/");
      }
    } catch (error) {
      toast.error(`Something Went Wrong`);
    }
  };
  return (
    <>
      <div className="container">
        <form className="w-md-25" onSubmit={handleLogin}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
