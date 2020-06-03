import React from "react";
import NavBar from "./NavBar";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
  it("should render NavBar", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText("Headlines")).toBeInTheDocument();
  });

  it("should display username and purpose when user logs in", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar user={{ username: "Charlie", purpose: "Learner" }} />
      </MemoryRouter>
    );
    expect(getByText("Charlie Learner")).toBeInTheDocument();
  });

  it("should call the resetUser method when the Logout button clicked", () => {
    const mockResetUser = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <NavBar
          user={{ username: "Collie", purpose: "Hacktivist" }}
          resetUser={mockResetUser}
        />
      </MemoryRouter>
    );
    fireEvent.click(getByText("Logout"));
    expect(mockResetUser).toHaveBeenCalled();
  });
});
