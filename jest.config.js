/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/**
 * @jest-environment jsdom
 */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "components/(.*)$": "<rootDir>/components/$1",
    "containers/(.*)$": "<rootDir>/containers/$1",
    "styles/(.*)$": "<rootDir>/styles/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
