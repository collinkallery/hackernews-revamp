import React, { useState } from "react";
import { useForm } from "react-hook-form";

// will refactor login to use useForm hook -LL

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("submitting");
  };

  return (
    <div>
      <h2>Login to HN Mobile Account</h2>
      <label htmlFor="username">Enter your username:</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Enter your password:</label>
      <input
        type="text"
        name="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="purpose">
        Good hackers only. What type of hacker are you?
      </label>
      <select id="purpose" onChange={(e) => Purpose(e.target.value)}>
        <option value=""> - Please choose a purpose - </option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="Hacktivist">Hacktivist</option>
        <option value="Learner">Learner</option>
        <option value="Engineer">Engineer</option>
        <option value="Other">Other</option>
      </select>

      <button className="login-btn" onClick={this.handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
