import { useState } from "react";
import { Link } from "react-router-dom";
const Forpass = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for: ", email);
  };
  return (
    <div className="father">
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Reset password</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <button className="submit" type="submit">
            Send Message
          </button>
          <div className="register-log">
            <span>
              Dont have an account?
              <Link className="Link" to="/login">
                Back to login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forpass;


