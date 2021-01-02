const { test, expect } = require('@jest/globals');
const analyze = require('./ArrayAnalysis');


structureObject = {
  average: expect.any(Number),
  min: expect.any(Number),
  max: expect.any(Number),
  length: expect.any(Number)
};

test('check if structure is correct', () => {
  expect(analyze([1,8,3,4,2,6])).toMatchObject(structureObject);
  expect(analyze([1,6])).toMatchObject(structureObject);
});

test('average of all numbers', () => {
  expect(analyze([1,8,3,4,2,6]).average).toBe(4);
  expect(analyze([1,6]).average).toBeCloseTo(3.5);
  expect(analyze([1,-8,2,6]).average).toBeCloseTo(0.25);
});

test('min number', () => {
  expect(analyze([1,8,3,4,2,6]).min).toBe(1);
  expect(analyze([1,-2,6]).min).toBe(-2);
  expect(analyze([3,88,2,6]).min).toBe(2);
});

test('max number', () => {
  expect(analyze([1,8,3,4,2,6]).max).toBe(8);
  expect(analyze([1,-2,6]).max).toBe(6);
  expect(analyze([3,88,2,6]).max).toBe(88);
});

test('length of the object', () => {
  expect(analyze([1,8,3,4,2,6]).length).toBe(6);
  expect(analyze([1,-2,6]).length).toBe(3);
  expect(analyze([3,88,2,6]).length).toBe(4);
});
