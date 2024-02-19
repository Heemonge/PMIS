import React, { useState } from "react";
import Login from "./Log/Login";
import Logout from "./Log/Logout";
import SignUp from "./Signup";
import "./Css/App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Approval from "./Approval";
import BusinessStatus from "./BusinessStatus";
import BusinessManagement from "./BusinessManagement";
import ProcessManagement from "./ProcessManagement";
import VSM from "./VSM";
import ConstructionManagement from "./ConstructionManagement";
import DocumentManagement from "./DocumentManagement";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">우리 홈페이지에 오신 걸 환영합니다!</h1>
          <div className="auth-container">
            {isLoggedIn ? (
              <Logout onLogout={handleLogout} />
            ) : (
              <Login onLogin={handleLogin} />
            )}
            {isLoggedIn && <p>{username}님, 환영합니다!</p>}
            <Link to="/signup">회원가입</Link>
          </div>
        </header>
        <nav className="app-nav">
          <ul className="menu-list">
            <li>
              <Link to="/approval">전자결재</Link>
            </li>
            <li>
              <Link to="/businessstatus">사업현황</Link>
            </li>
            <li>
              <Link to="/businessmanagement">사업관리</Link>
            </li>
            <li>
              <Link to="/processmanagement">공정관리</Link>
            </li>
            <li>
              <Link to="/vsm">VSM</Link>
            </li>
            <li>
              <Link to="/constructionmanagement">시공관리</Link>
            </li>
            <li>
              <Link to="/documentmanagement">문서관리</Link>
            </li>
          </ul>
        </nav>
        <main className="app-main">
          <Switch>
            <Route path="/approval" component={Approval} />
            <Route path="/businessstatus" component={BusinessStatus} />
            <Route path="/businessmanagement" component={BusinessManagement} />
            <Route path="/processmanagement" component={ProcessManagement} />
            <Route path="/vsm" component={VSM} />
            <Route
              path="/constructionmanagement"
              component={ConstructionManagement}
            />
            <Route path="/documentmanagement" component={DocumentManagement} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </main>
        <footer className="app-footer">
          <p>&copy; 2024 건설 PMIS. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
