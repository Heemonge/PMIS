const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors"); // cors 미들웨어 추가

const app = express();

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1233",
  database: "pmis",
});

// MySQL 연결 확인
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Body parser 설정
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// 회원가입 API 엔드포인트
app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;

  // MySQL에 사용자 정보 저장
  const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  connection.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error("Error saving user to MySQL:", err);
      res.status(500).json({ message: "서버 오류입니다." });
      return;
    }
    res.status(201).json({ message: "회원가입이 완료되었습니다." });
  });
});

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
