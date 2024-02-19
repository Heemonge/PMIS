// src/components/Log/Login.js
import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 실제로는 여기에 서버와 통신하여 로그인 처리를 해야 합니다.
    // 이 예시에서는 간단하게 username이 "admin"이고 password가 "password"인 경우에만 로그인 성공으로 가정합니다.
    if (username === "admin" && password === "password") {
      onLogin(username);
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <div>
        <label>사용자 이름:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>비밀번호:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Login;
