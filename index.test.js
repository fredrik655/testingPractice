const { test, expect } = require("@jest/globals");
const indexModule = require('./index');
const calculatorModule = require('./Calculator');

const capitalize = indexModule.capitalize;
const reverseString = indexModule.reverseString;

const add = calculatorModule.add;
const subtract = calculatorModule.subtract;
const divide = calculatorModule.divide;
const multiply = calculatorModule.multiply;



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

test('add whole number', () => {
  expect(add(1, 3)).toBe(4);
  expect(add(2, 2)).toBe(4);
})

test('add neg number', () => {
  expect(add(-1, 3)).toBe(2);
  expect(add(-2, -2)).toBe(-4);
})

test('add rational number', () => {
  expect(add(0.5, 3.5)).toBe(4);
  expect(add(2, 7.2)).toBe(9.2);
})

