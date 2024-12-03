

import { useState } from "react";
import { login } from "../Api";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

 
    login(email, password)
    .then(()=>{
navigate("/todo");
    })
 
      .catch((err) => {
   
        setError("An error occurred during login.");
      });
  };

  return (
    <div className="father">
      <div className="wrapper">
        <form action="" onSubmit={handleLogin}>
          <h1>Login</h1>
          {error && <div className="error-message">{error}</div>}{" "}
         
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password" 
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
          <div className="register-log">
            <Link className="Link" to="/forpass">
              Forgot Password
            </Link>
            <span>
              Don't have an account?
              <Link className="Link" to="/register">
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
