import { login } from "../src/js/api/auth/login";
import { logout } from "../src/js/api/auth/logout";
import { save, remove } from "../src/js/storage/index";

jest.mock("../src/js/storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(() => "mockToken"),
  remove: jest.fn(),
}));

global.fetch = jest.fn();

describe("Auth Module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("login function", () => {
    it("should store token and profile on successful login", async () => {
      const mockToken = "mockToken";
      const mockProfile = { name: "mockName" };

      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ accessToken: mockToken, ...mockProfile }),
      });

      const profile = await login("test@example.com", "password123");

      expect(save).toHaveBeenCalledWith("token", mockToken);
      expect(save).toHaveBeenCalledWith("profile", mockProfile);
      expect(profile).toEqual(mockProfile);
    });

    it("should throw an error on failed login", async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        statusText: "Unauthorized",
      });

      await expect(
        login("invalid@example.com", "wrongPassword"),
      ).rejects.toThrow("Unauthorized");
    });
  });

  describe("logout function", () => {
    it("should remove token and profile from storage", () => {
      logout();

      expect(remove).toHaveBeenCalledWith("token");
      expect(remove).toHaveBeenCalledWith("profile");
    });
  });
});
