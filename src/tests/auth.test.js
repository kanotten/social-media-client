// Import login and logout functions
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
  // Ensure localStorage is cleared after each test to avoid affecting other tests
  global.localStorage.clear();
});

// Authentication Tests
describe("Authentication Tests", () => {
  // Clear localStorage before each individual test
  beforeEach(() => {
    localStorage.clear();
  });

  test("Login stores token in localStorage", () => {
    // Mock token for login
    const token = "mockToken123";
    login(token); // Assuming login(token) stores token in localStorage
    expect(localStorage.getItem("authToken")).toBe(token);
  });

  test("Logout clears token from localStorage", () => {
    // Mock token for login and then logout
    login("mockToken123"); // Assuming login(token) stores token in localStorage
    logout(); // Assuming logout() removes the token from localStorage
    expect(localStorage.getItem("authToken")).toBe(null);
  });
});
