const { test, expect } = require("@jest/globals");
const indexModule = require('./index');

const capitalize = indexModule.capitalize;
const reverseString = indexModule.reverseString;

test('capitalize first letter of string ', () => {
  expect(capitalize('Hello')).toBe('Hello');
  expect(capitalize('abc')).toBe('Abc');
  expect(capitalize('capitalize')).toBe('Capitalize');
  expect(capitalize('hello WorLd')).toBe('Hello world');
});

test('Reverses a string', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
  expect(reverseString('Abcd')).toBe('dcbA');
  expect(reverseString('Anna')).toBe('annA');
});

