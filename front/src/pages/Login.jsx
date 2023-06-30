import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "JulietaFader@pages.com" && password === "Andromeda") {
      navigate("/home");
    } else {
      setError(" Error de inicio de sesión. Verifica tus datos.");
    }
  };

  return (
    <div className={styles["login-wrapper"]}>
      <div className={styles["login-container"]}>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles["login-input"]}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles["login-input"]}
          />
          <button type="submit" className={styles["login-button"]}>
            Login
          </button>
          {error && <p className={styles["error-message"]}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
