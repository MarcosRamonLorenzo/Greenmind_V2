import { Eye, Shield, User } from "lucide-react";
import React from "react";
import GoBack from "../components/GoBack";
import "./Profile.css";
import profileImg from "../assets/squirtEl.jpg"
import useUser from "../hooks/useUser";

export const Profile = () => {


  const { estadoUsuario, cerrarSesionUsuario } = useUser();

  return (
    <div className="profile-container">
      <header className="profile-header">
        <GoBack className="icon" />
        <h2>Profile</h2>
      </header>

      <div className="profile-user-info">
        <img src={profileImg} alt="" className="profile-avatar" />
        <div>
          <p className="profile-username">{estadoUsuario?.user_metadata.name}</p>
          <p className="profile-handle">@{estadoUsuario?.user_metadata.email?.split("@")[0]}</p>
        </div>
      </div>

      <h3 className="options-title">Options</h3>

      <div className="options-list">
        <div className="option-item">
          <User className="icon" />
          <span>Account settings</span>
        </div>
        <div className="option-item">
          <Eye className="icon" />
          <span>Accessibility settings</span>
        </div>

        <div className="option-item">
          <Shield className="icon" />
          <span>Security</span>
        </div>
      </div>

      <button onClick={()=>{cerrarSesionUsuario()}}className="logout-btn">Log out</button>
    </div>
  );
};
