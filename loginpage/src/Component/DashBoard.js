import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const nav = useNavigate();

  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("");
    nav(-1);
  };
  return (
    <div className="dash_container">
    <div className="dash_child_container">
      <h2 id="dash_first_heading">WELCOME TO DASHBOARD</h2>
      <br></br>
      <p id="dash_second_heading">loream {userName.name}</p>
      <br></br>
       <button onClick={handleLogout} id="btn_dash">Logout</button>
       <br></br>
       <button onClick={()=>nav('/admin')} id="dash_admin">COMPONENT</button>
      </div>
    </div>
  );
};

export default DashBoard;
