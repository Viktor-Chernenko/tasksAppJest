module.exports = {
  preset: "@vue/cli-plugin-unit-jest",

  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/store/tasks/index.js$",
    "/src/store/index.js$",
    "/src/router/index.js$",
    "/babel.config.js$",
    "/jest.config.js$",
    "/coverage/",
    "/src/main.js$",
    "/src/views/NewTask.vue$",
  ],

  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/src/plugins/**",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
};
