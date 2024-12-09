import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../Api";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      console.log({
        firstName,
        email,
        password,
        lastName,
      });

      if (!firstName || !email || !password || !lastName) {
        setError("All fields are required");
        return;
      }

      await register(email, password, firstName, lastName);
      setSuccess("Account created successfully! Please login.");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="father">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
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
              type="text"
              placeholder="First Name"
              // required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder=" Last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
          <div>{success && <p style={{ color: "green" }}>{success}</p>}</div>
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
