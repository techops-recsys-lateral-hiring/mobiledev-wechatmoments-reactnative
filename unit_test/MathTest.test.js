import {describe, expect, test} from '@jest/globals';
import {add,subtract} from '../src/Math';

describe('Math Module', () => {
  
    test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtract 1 + 2 to equal 3', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});