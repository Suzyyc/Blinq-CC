import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Home from "../components/Home";
import { isSameEmail } from "../components/FormModal";

test("isSameEmail returns true if emails match", async () => {
  const result = isSameEmail("test@test.com", "test@test.com");

  expect(result).toBe(true);
});

test("isSameEmail returns false if emails do not match", async () => {
  const result = isSameEmail("test@test.com", "test1@test.com");

  expect(result).toBe(false);
});
