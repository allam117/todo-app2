import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CurrentUserContextProvider,
  useCurrentUser,
} from "../context/AuthContext";

const Profile = () => {
  const { currentUser, isLoggedIn } = useCurrentUser();

  if (!isLoggedIn) {
    return <div>Please login first</div>;
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "70px 0px 70px 0px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ padding: "0px 0px 30px 0px", fontSize: "3.2rem" }}>
        Profile
      </h2>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Name:</strong> {currentUser.firstName}
      </p>

      <p>
        <strong>createdAt:</strong> {currentUser.createdAt}
      </p>
      <p>
        <strong>updatedAt:</strong> {currentUser.updatedAt}
      </p>
    
      {/* <p><pre>{JSON.stringify(currentUser, null, 2)}</pre></p> */}
    </div>
  );
};

export default Profile;
