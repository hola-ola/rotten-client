import React, { useState } from "react";
import "../style/ProfilePage.css";
import UpdateProfile from "../components/Profile/UpdateProfile";
import UpdatePassword from "../components/Profile/UpdatePassword";

export default function ProfilePage(props) {
  const [displayUpdateProfile, setDisplayUpdateProfile] = useState(false);
  const [displayUpdatePassword, setDisplayUpdatePassword] = useState(false);
  const { user, authenticate } = props;

  function ProfileToggle() {
    setDisplayUpdateProfile(!displayUpdateProfile);
  }

  function PasswordToggle() {
    setDisplayUpdatePassword(!displayUpdatePassword);
  }

  return (
    <div>
      <img id="profilePic" src={user.profilePic} alt={user.username} />
      <h2>{user.username}</h2>

      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      <button className="button" onClick={ProfileToggle}>
        Update profile
      </button>
      {displayUpdateProfile && (
        <UpdateProfile user={user} authenticate={authenticate} />
      )}
      <button className="button" onClick={PasswordToggle}>
        {displayUpdatePassword && <UpdatePassword />}
        Update password
      </button>
      <button className="button">Remove profile</button>
    </div>
  );
}
