/**
Palindrome Permutation: Given a string, write a function to check if it is a
permutation of a palindrome. A palindrome is a word or phrase that is the same
forwards and backwards. A permutation is a rearrangement of letters. The
palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat'; "atc o cta", etc.)
*/

/* eslint-disable require-jsdoc */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function isPalindromePermutation(str: string): boolean {
  if (!str) {
    return false;
  }

  const characterCounter: Map<string, number> = new Map();
  Array.from(str.toLowerCase()).forEach((character) => {
    if (character == ' ') {
      return;
    }

    if (characterCounter.has(character)) {
      characterCounter.set(character, characterCounter.get(character) + 1);
    } else {
      characterCounter.set(character, 1);
    }
  });

  let oddCounter = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  characterCounter.forEach((value: number, key: string) => {
    if (value % 2 == 1) {
      oddCounter++;
    }
  });

  return oddCounter <= 1;
}
