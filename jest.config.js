export default {
  //preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/tests/setupAfterEnv.js"],
  transform: {
    //'^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};