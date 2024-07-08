module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['./'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  setupFiles: ['<rootDir>/test/dotenv-config.js'],
};
