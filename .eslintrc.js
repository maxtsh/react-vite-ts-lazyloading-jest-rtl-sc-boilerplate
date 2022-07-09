module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/react",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "vite.config.js"],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "testing-library/no-render-in-setup": [
      "error",
      { allowTestingFrameworkSetupHook: "beforeEach" },
    ],
    // "@typescript-eslint/no-unsafe-return": "off",
    // "@typescript-eslint/no-unsafe-argument": "off",
    // "@typescript-eslint/no-unsafe-call": "off",
    // "@typescript-eslint/no-unsafe-member-access": "off",
    // "@typescript-eslint/no-unsafe-assignment": "off",
    // "@typescript-eslint/no-floating-promises": "off",
  },
};
