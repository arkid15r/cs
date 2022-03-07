/* Binary search tree. */

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

  // public delete(value: T): Node<T> {}

  public search(value: T): Node<T> {
    function _search(node: Node<T>, value: T): Node<T> | null {
      if (!node) {
        return node;
      }

      if (node.value == value) {
        return node;
      }

      if (value < node.value) {
        return _search(node.left, value);
      } else {
        return _search(node.right, value);
      }
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
      }
      if (value > node.value) {
        node.right = _insert(node.right, value);
      }

      return node;
    }

    this.root = _insert(this.root, value);
  }

  public inOrderTraversal(): Array<T> {
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

  public toString(): string {
    return `${this.root} ${this.root.left} ${this.root.right}`;
  }
}
