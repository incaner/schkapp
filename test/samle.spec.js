import { describe, expect, test } from 'vitest';


describe('Sample test that will pass', () => {

  test('This test sould be true', () => {
    expect(true).toBe(true);
  });

  test("Sample test", () => {
    expect(1 + 3).equal(4);
  });
});

describe('Sample test that will fail', () => {

  test('This test sould be false', () => {
    expect(true).toBe(false);
  });

});
