module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^../src/(.*)$": "<rootDir>/src/$1", // Added mapping for relative paths, since modules caused errors.
  },
  testEnvironment: "jsdom", // changed from node - using browser testings
};
