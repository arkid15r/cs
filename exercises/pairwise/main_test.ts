/** Symmetric difference tests. */

import { assert, should as _should } from 'chai';
import { isEqual } from 'lodash';
import { pairwise } from 'exercises/pairwise/main';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = _should();

describe('Pairwise', () => {
	it('should return 0', () => {
		const result = pairwise([], 100);
		assert.isTrue(isEqual(result, 0));
	});

	it('should return 1', () => {
		const result = pairwise([1, 3, 2, 4], 4);
		assert.isTrue(isEqual(result, 1));
	});

	it('should return 1', () => {
		const result = pairwise([1, 1, 1], 2);
		assert.isTrue(isEqual(result, 1));
	});

	it('should return 11', () => {
		const result = pairwise([1, 4, 2, 3, 0, 5], 7);
		assert.isTrue(isEqual(result, 11));
	});

	it('should return 10', () => {
		const result = pairwise([0, 0, 0, 0, 1, 1], 1);
		assert.isTrue(isEqual(result, 10));
	});

	it('should return 20', () => {
		assert.isTrue(isEqual(pairwise([1, 2, 1, 3, 5, 0, 3, 4, 5], 5), 20));
	});
});
