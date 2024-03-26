import React, { useState } from "react";
import authService from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(username, password);
      console.log(response);
      navigate("/favourites");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "50vh", marginBottom: "10px" }}
    >
      <h1
        style={{
          textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
        }}
      >
        Login{" "}
      </h1>
      <input
        type="text"
        placeholder="Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>Invalid Details</p>}
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default LoginForm;
