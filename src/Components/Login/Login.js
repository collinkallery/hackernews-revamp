import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// set user
// pass user down to NavBar thru props
// add username and purpose to NavBar
// change login to logout

const Login = (props) => {
  const { register } = useForm();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");

  const checkInputs = () => {
    return username !== "" && password !== "" && purpose !== "";
  };

  const handleClick = () => {
    checkInputs()
      ? props.setUser({
          username: username,
          purpose: purpose,
        })
      : setError("Please complete all inputs to login.");
  };

  return (
    <div>
      <h2>Login to HN Mobile Account</h2>
      <form>
        <label htmlFor="email">Enter your username:</label>
        <input
          type="text"
          name="email"
          id="username"
          placeholder="username"
          ref={register}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Enter your password:</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
          ref={register}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="purpose">
          Good hackers only. What type of hacker are you?
        </label>
        <select
          id="purpose"
          ref={register}
          onChange={(e) => setPurpose(e.target.value)}
        >
          <option value="''"> - Please choose a purpose - </option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Hacktivist">Hacktivist</option>
          <option value="Learner">Learner</option>
          <option value="Engineer">Engineer</option>
          <option value="Other">Other</option>
        </select>
        <p> {error} </p>
        <Link to={checkInputs() && "/"}>
          <button onClick={handleClick}>Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
