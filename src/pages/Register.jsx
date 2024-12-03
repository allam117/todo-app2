import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../Api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
      confirmPassword,
    });

    if (password !== confirmPassword) {
      setError("Passwords not equal confirmPassword ");
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    setSuccess("Account created successfully! Please login.");
    setError("");

    register(email, password, name, name);
  };

  return (
    <div className="father">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input-box">
            <input
              type="Password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="input-box">
            <input
              type="Password"
              placeholder=" Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <div>{error && <p>{error}</p>}</div>
          <button className="submit" type="submit">
            submit
          </button>
          <div className="register-log">
            <span>
              have an account?
              <Link className="Link" to="/login">
                Login Here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
