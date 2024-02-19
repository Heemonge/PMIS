import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  // 회원가입 폼 필드에 대한 상태 정의
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // 폼 필드 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 회원가입 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 회원가입 데이터를 서버로 전송
      await axios.post("http://localhost:5000/api/signup", formData); // 수정된 부분
      console.log("회원가입 성공!");
      // 회원가입 성공 후 다음 작업 수행
    } catch (error) {
      console.error("회원가입 실패:", error);
      // 회원가입 실패 처리
    }
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">사용자 이름</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default SignUp;
