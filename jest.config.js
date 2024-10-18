module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "node",
};
