const { test, expect } = require("@jest/globals");
const {capitalize} = require('./index');

test('capitalize first letter of string ', () => {
  expect('Hello').toBe('Hello');
  expect('abc').toBe('Abc');
  expect('capitalize').toBe('Capitalize');
})