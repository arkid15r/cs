/* Binary search tree (recursive implementation). */

/* eslint-disable require-jsdoc */

class Node<T> {
  public value: T;
  public left: Node<T> | null = null;
  public right: Node<T> | null = null;

  public constructor(value: T) {
    this.value = value;
  }
  public toString(): string {
    return `(${this.value})`;
  }
}

export class BinarySearchTree<T> {
  private root: Node<T>;

  public delete(value: T): void {
    function _delete(node: Node<T>, value: T): Node<T> | null {
      if (!node) {
        return node;
      }

      if (value < node.value) {
        node.left = _delete(node.left, value);
      } else if (value > node.value) {
        node.right = _delete(node.right, value);
      } else {
        // One child.
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }

        // Two children.
        node.value = _findMostBottomLeft(node.right).value;
        node.right = _delete(node.right, node.value);
      }

      return node;
    }

    function _findMostBottomLeft(node: Node<T>): Node<T> {
      if (node.left == null) {
        return node;
      }

      return _findMostBottomLeft(node.left);
    }

    _delete(this.root, value);
  }

  public constructor(array?: Array<T>) {
    if (array) {
      array.forEach((value) => {
        this.insert(value);
      });
    }
  }

  public search(value: T): Node<T> {
    function _search(node: Node<T>, value: T): Node<T> | null {
      if (!node) {
        return node; // null
      }

      if (value < node.value) {
        return _search(node.left, value);
      } else if (value > node.value) {
        return _search(node.right, value);
      }

      return node;
    }

    return _search(this.root, value);
  }

  public insert(value: T): void {
    function _insert(node: Node<T>, value: T): Node<T> {
      if (!node) {
        return new Node(value);
      }

      if (value < node.value) {
        node.left = _insert(node.left, value);
      } else if (value > node.value) {
        node.right = _insert(node.right, value);
      }

      return node;
    }

    this.root = _insert(this.root, value);
  }

  public traverseInOrder(): Array<T> {
    const res = [];

    function _traverse(node: Node<T>): void {
      if (!node) {
        return;
      }

      _traverse(node.left);
      res.push(node.value);
      _traverse(node.right);
    }

    _traverse(this.root);

    return res;
  }

  public traversePreOrder(): Array<T> {
    const res = [];

    function _traverse(node: Node<T>): void {
      if (!node) {
        return;
      }

      res.push(node.value);
      _traverse(node.left);
      _traverse(node.right);
    }

    _traverse(this.root);

    return res;
  }

  public traversePostOrder(): Array<T> {
    const res = [];

    function _traverse(node: Node<T>): void {
      if (!node) {
        return;
      }

      _traverse(node.left);
      _traverse(node.right);
      res.push(node.value);
    }

    _traverse(this.root);

    return res;
  }
}
