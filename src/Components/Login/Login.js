import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "../../theme/globalStyle";
import PropTypes from "prop-types";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  surface,
  error,
} = darkTheme;

const Login = (props) => {
  // const { register } = useForm();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4%;

    button {
    background-color: ${secondaryTeal};
    margin: 2%;
    border: none;
    padding: 1%;
    font-size: .8em;
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 1px 1px 1px ${surface};
  }
    }
  `;
  
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
    <Wrapper>
      <h2>Login to HN Mobile Account</h2>
      <form>
        <label htmlFor="email">Enter your username: </label>
        <input
          type="text"
          name="email"
          id="username"
          placeholder="username"
          // ref={register}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Enter your password: </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
          // ref={register}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="purpose">
          Good hackers only. What type of hacker are you?
        </label>
        <select
          id="purpose"
          // ref={register}
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
    </Wrapper>
  );
};

Login.propTypes = {
  setUser: PropTypes.func,
  resetUser: PropTypes.func,
};

export default Login;
