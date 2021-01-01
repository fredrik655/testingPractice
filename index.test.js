const { test, expect } = require("@jest/globals");
const capitalize = require('./index');

test('capitalize first letter of string ', () => {
  expect(capitalize('Hello')).toBe('Hello');
  expect(capitalize('abc')).toBe('Abc');
  expect(capitalize('capitalize')).toBe('Capitalize');
  expect(capitalize('hello WorLd')).toBe('Hello world');
})