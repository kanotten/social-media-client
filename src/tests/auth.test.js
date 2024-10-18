import { login, logout } from "../js/api/auth/state.js";

// Mock localStorage
beforeEach(() => {
  global.localStorage = {
    store: {},
    getItem(key) {
      return this.store[key] || null;
    },
    setItem(key, value) {
      this.store[key] = value.toString();
    },
    removeItem(key) {
      delete this.store[key];
    },
    clear() {
      this.store = {};
    },
  };
});

afterEach(() => {
  // Clear localStorage after each test to ensure a clean state
  global.localStorage.clear();
});

describe("Authentication Tests", () => {
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
