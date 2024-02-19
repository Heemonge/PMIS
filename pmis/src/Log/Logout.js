// src/components/Log/Logout.js
import React from "react";

function Logout({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default Logout;
