module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^../src/(.*)$": "<rootDir>/src/$1", // Added mapping for relative paths
  },
  testEnvironment: "jsdom", // node causes mapping problem, switched to jsdom for browser testing
};
