/** Palindrome permutation tests. */

import { assert } from 'chai';
import { isPalindromePermutation } from 'exercises/palindrome-permutation/main';

describe('isPalindromePermutation', () => {
  it('should return false for an empty string', () => {
    const values = ['', null, undefined];
    values.forEach((value) => {
      assert.isFalse(isPalindromePermutation(value), `value: ${value}`);
    });
  });

  it('should return true for an one character string', () => {
    const values = ['A', 'a', ' '];
    values.forEach((value) => {
      assert.isTrue(isPalindromePermutation(value));
    });
  });

  it('should return false for non palindrome permutation strings', () => {
    const values = ['ABCDEF', 'abcdef', 'abCDef'];
    values.forEach((value) => {
      assert.isFalse(isPalindromePermutation(value));
    });
  });

  it('should return true for palindrome permutation strings', () => {
    const values = [
      ' ',
      '  ',
      '  ',
      'abba',
      'ab ba',
      'a a',
      'tactcoapapa',
      'Tact Coa',
    ];
    values.forEach((value) => {
      assert.isTrue(isPalindromePermutation(value));
    });
  });
});
