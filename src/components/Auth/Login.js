import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", role: "user" });
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("authToken", "sample_token");
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };
  console.log("authToken:", localStorage.getItem("authToken"));
  console.log("user:", JSON.parse(localStorage.getItem("user")));


  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <select onChange={(e) => setUser({ ...user, role: e.target.value })}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
