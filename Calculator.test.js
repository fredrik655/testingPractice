const { test, expect } = require("@jest/globals");
const calculatorModule = require('./Calculator');

const add = calculatorModule.add;
const subtract = calculatorModule.subtract;
const divide = calculatorModule.divide;
const multiply = calculatorModule.multiply;


// test add func
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

// test sub func
test('subtract whole number', () => {
  expect(subtract(1, 3)).toBe(-2);
  expect(subtract(2, 2)).toBe(0);
})

test('subtract neg number', () => {
  expect(subtract(-1, 3)).toBe(-4);
  expect(subtract(-2, -2)).toBe(0);
})

test('subtract rational number', () => {
  expect(subtract(0.5, 3.5)).toBe(-3);
  expect(subtract(2, 7.2)).toBe(-5.2);
})

//test div func
test('divide whole number', () => {
  expect(divide(1, 3)).toBeCloseTo(0.333);
  expect(divide(2, 2)).toBe(1);
})

test('divide neg number', () => {
  expect(divide(-1, 3)).toBeCloseTo(-0.333);
  expect(divide(-2, -2)).toBe(1);
})

test('divide rational number', () => {
  expect(divide(0.5, 3.5)).toBeCloseTo(0.143);
  expect(divide(2, 7.2)).toBeCloseTo(0.278);
})

// test mult func
test('multiply whole number', () => {
  expect(multiply(1, 3)).toBe(3);
  expect(multiply(2, 2)).toBe(4);
})

test('multiply neg number', () => {
  expect(multiply(-1, 3)).toBe(-3);
  expect(multiply(-2, -2)).toBe(4);
})

test('multiply rational number', () => {
  expect(multiply(0.5, 3.5)).toBeCloseTo(1.75);
  expect(multiply(2, 7.2)).toBeCloseTo(14.4);
})

