import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

test("Header shows company name", async () => {
  render(<Header />);
  expect(screen.getByText("Broccoli & Co")).toBeVisible();
});
