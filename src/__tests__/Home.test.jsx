import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Home from "../components/Home";

test("user can request an invite", async () => {
  render(<Home />);

  expect(screen.getByText("Request an invite")).toBeVisible();
});
