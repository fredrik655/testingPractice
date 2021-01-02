const { test, expect } = require('@jest/globals');
const caesar = require('./Caesar');


test('shift with index', () => {
  expect(caesar('abc',1)).toBe('bcd');
  expect(caesar('hello',5)).toBe('mjqqt');
  expect(caesar('caesar',3)).toBe('fdhvdu');
})

test('shift with neg index', () => {
  expect(caesar('abc',-1)).toBe('zab');
  expect(caesar('hello',-2)).toBe('fcjjm');
  expect(caesar('caesar',-2)).toBe('aycqyp');
})

test('shift with wrapping lowercase', () => {
  expect(caesar('xyz',3)).toBe('abc');
  expect(caesar('hello',14)).toBe('vszzc');
  expect(caesar('caesar',16)).toBe('squiqh');
})

test('shift with wrapping uppercase', () => {
  expect(caesar('XYZ',3)).toBe('ABC');
  expect(caesar('HELLO',14)).toBe('VSZZC');
  expect(caesar('CAESAR',16)).toBe('SQUIQH');
})

test('shift with upper and lowercase', () => {
  expect(caesar('Xyz',3)).toBe('Abc');
  expect(caesar('hEllo',14)).toBe('vSzzc');
  expect(caesar('caEsaR',16)).toBe('sqUiqH');
})

test('shift with punctuation', () => {
  expect(caesar('hello world.',8)).toBe('pmttw ewztl.');
})