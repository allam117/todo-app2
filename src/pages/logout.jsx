

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout } from "../api"; 

const Logout = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
     
      await logout();
      navigate("/login"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="logoutPage"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h2>Are you sure you want to log out?</h2>

      <div className="logbut">
        <button
          onClick={handleLogout}
          style={{
            marginRight: "30px",
            fontSize: "1.5rem",
            color: "blue",
            fontWeight: "bold",
          }}
        >
          Yes, Log Out
        </button>
        <button         
         onClick={() => navigate("/todo")}
          style={{
          
            fontSize: "1.5rem",
            color: "blue",
            fontWeight: "bold",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
