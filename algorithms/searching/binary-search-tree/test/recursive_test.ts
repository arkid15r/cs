import { BinarySearchTree } from 'algorithms/searching/binary-search-tree/recursive';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Binary Search Tree', function () {
  describe('delete', () => {
    it('should delete a node with no children', () => {
      const values = [5, 19, 22, 14, 1, 2, 3, 7, 4];
      const bst: BinarySearchTree<number> = new BinarySearchTree(values);

      bst.delete(4);
      assert.isTrue(
        isEqual(bst.traverseInOrder(), [1, 2, 3, 5, 7, 14, 19, 22])
      );

      bst.delete(7);
      assert.isTrue(isEqual(bst.traverseInOrder(), [1, 2, 3, 5, 14, 19, 22]));

      bst.delete(22);
      assert.isTrue(isEqual(bst.traverseInOrder(), [1, 2, 3, 5, 14, 19]));
    });

    it('should delete a node with one child', () => {
      const values = [5, 19, 22, 14, 1, 2, 3, 7, 4];
      const bst: BinarySearchTree<number> = new BinarySearchTree(values);

      bst.delete(14);
      assert.isTrue(isEqual(bst.traverseInOrder(), [1, 2, 3, 4, 5, 7, 19, 22]));

      bst.delete(3);
      assert.isTrue(isEqual(bst.traverseInOrder(), [1, 2, 4, 5, 7, 19, 22]));
    });

    it('should delete a node with two children', () => {
      const values = [5, 19, 22, 14, 1, 2, 3, 7, 4];
      const bst: BinarySearchTree<number> = new BinarySearchTree(values);

      bst.delete(19);
      assert.isTrue(isEqual(bst.traverseInOrder(), [1, 2, 3, 4, 5, 7, 14, 22]));

      bst.delete(5);
      assert.isTrue(isEqual(bst.traverseInOrder(), [1, 2, 3, 4, 7, 14, 22]));
    });
  });
  describe('insert', () => {
    it('should insert element to the root', () => {
      const bst: BinarySearchTree<number> = new BinarySearchTree();
      bst.insert(1);
      assert.isTrue(isEqual(bst.traverseInOrder(), [1]));
    });

    it('should insert elements', () => {
      const bst: BinarySearchTree<number> = new BinarySearchTree();

      bst.insert(20);
      assert.isTrue(isEqual(bst.traverseInOrder(), [20]));

      bst.insert(30);
      bst.insert(10);
      assert.isTrue(isEqual(bst.traverseInOrder(), [10, 20, 30]));
    });
  });

  describe('search', () => {
    it('should find existing elements', () => {
      const values = [5, 19, 22, 14, 1, 2, 3, 7, 4];
      const bst: BinarySearchTree<number> = new BinarySearchTree(values);

      values.forEach((value) => {
        assert.isTrue(bst.search(value).value == value);
      });
    });

    it('should not find non-existing elements', () => {
      const values = [5, 19, 22, 14, 1, 2, 3, 7, 4];
      const bst: BinarySearchTree<number> = new BinarySearchTree(values);

      [0, -1, 100].forEach((value) => {
        assert.isNull(bst.search(value));
      });
    });
  });

  describe('traverseInOrder', () => {
    it('should traverse in order', () => {
      const values = [1, 2, 3, 7, 4, 5, 19, 22, 14];
      const bst: BinarySearchTree<number> = new BinarySearchTree(values);

      assert.isTrue(
        isEqual(
          bst.traverseInOrder(),
          values.sort((a, b) => {
            return a - b;
          })
        )
      );
    });
  });

  describe('traversePostOrder', () => {
    it('should traverse post order', () => {
      const expectedOrder = [4, 3, 2, 1, 7, 14, 22, 19, 5];
      const values = [5, 19, 22, 14, 1, 2, 3, 7, 4];
      const bst: BinarySearchTree<number> = new BinarySearchTree(values);

      assert.isTrue(isEqual(bst.traversePostOrder(), expectedOrder));
    });
  });

  describe('traversePreOrder', () => {
    it('should traverse pre order', () => {
      const expectedOrder = [5, 1, 2, 3, 4, 19, 14, 7, 22];
      const values = [5, 19, 22, 14, 1, 2, 3, 7, 4];
      const bst: BinarySearchTree<number> = new BinarySearchTree(values);

      assert.isTrue(isEqual(bst.traversePreOrder(), expectedOrder));
    });
  });
});
