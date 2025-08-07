const { test, expect } = require('@jest/globals');
const { multiply } = require('./functions');

test('multiply returns the product of two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(0, 10)).toBe(0);
});