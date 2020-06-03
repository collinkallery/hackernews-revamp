import React from "react";
import Login from "./Login";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
  it("should render login form", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(getByLabelText("Enter your username:")).toBeInTheDocument();
  });

  it("should render error message if missing input", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const usernameInput = getByPlaceholderText("username");
    fireEvent.change(usernameInput, { target: { value: "Bean" } });
    fireEvent.click(getByText("Login"));
    expect(getByText("Please complete all inputs to login."));
  });

  it("should run setUser if all inputs are filled in", () => {
    const mockSetUser = jest.fn();
    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <MemoryRouter>
        <Login setUser={mockSetUser} />
      </MemoryRouter>
    );
    const usernameInput = getByPlaceholderText("username");
    fireEvent.change(usernameInput, { target: { value: "Bean" } });
    const passwordInput = getByPlaceholderText("password");
    fireEvent.change(passwordInput, { target: { value: "rice" } });
    const purposeInput = getByLabelText(
      "Good hackers only. What type of hacker are you?"
    );
    fireEvent.change(purposeInput, { target: { value: "Learner" } });
    fireEvent.click(getByText("Login"));
    expect(mockSetUser).toHaveBeenCalled();
  });
});
