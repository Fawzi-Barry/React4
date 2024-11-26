import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import ErrorMessage from "./ErrorMessage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setShowError(false);
    } else if (username === "user" && password === "user") {
      setIsAdmin(false);
      setIsLoggedIn(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <>
          <LoginForm onLogin={handleLogin} />
          {showError && <ErrorMessage />}
        </>
      ) : isAdmin ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </div>
  );
};

export default App;
