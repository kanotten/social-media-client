/* global describe, beforeEach, test, expect */

import { login, logout } from "../../js/api/auth/state";

describe("Authentication Tests", () => {
  // Clear localStorage before each test to ensure a clean state
  beforeEach(() => {
    localStorage.clear();
  });

  test("Login stores token in localStorage", () => {
    const token = "mockToken123";
    login(token);
    expect(localStorage.getItem("authToken")).toBe(token);
  });

  test("Logout clears token from localStorage", () => {
    login("mockToken123");
    logout();
    expect(localStorage.getItem("authToken")).toBe(null);
  });
});
