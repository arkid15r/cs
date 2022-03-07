import { BinarySearchTree } from 'algorithms/searching/binary-search-tree/main';
import { assert } from 'chai';
import { isEqual } from 'lodash';

describe('Binary Search Tree', function () {
  describe('insert', () => {
    it('should insert first element to the root', () => {
      const bst: BinarySearchTree<number> = new BinarySearchTree();
      bst.insert(1);
      assert.isTrue(isEqual(bst.inOrderTraversal(), [1]));
      bst.insert(3);
      bst.insert(2);
      assert.isTrue(isEqual(bst.inOrderTraversal(), [1, 2, 3]));
    });
    it('should insert first elements', () => {
      const bst: BinarySearchTree<number> = new BinarySearchTree();
      bst.insert(20);
      assert.isTrue(isEqual(bst.inOrderTraversal(), [20]));
      bst.insert(30);
      bst.insert(10);
      assert.isTrue(isEqual(bst.inOrderTraversal(), [10, 20, 30]));
    });
  });
});
