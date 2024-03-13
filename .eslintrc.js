module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base','plugin:prettier/recommended',],
  plugins: [
    "prettier"
  ],
  rules: {
    'prettier/prettier': 'warn'
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021
  },
  ignorePatterns: [
    "node_modules",
    "build",
    "dist",
    "public"
  ]
};
