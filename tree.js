class Node {
  left;
  right;
  constructor(data) {
    this.data = data;
  }
}

class Tree {
  count = 0;
  root;

  #insert(root, node) {
    if (!root) return node;
    if (node.data < root.data) {
      root.left = this.#insert(root.left, node);
      return root;
    } else {
      root.right = this.#insert(root.right, node);
      return root;
    }
    return root;
  }
  
  add(data) {
    const node = new Node(data);
    if (this.count == 0) {
      this.root = node;
    } else {
      this.#insert(this.root, node);
    }
    return ++this.count;
  };
  
  #get(data, node) {
    if (node) {
      if (data < node.data) {
        return this.#get(data, node.left);
      } else if (data > node.data) {
        return this.#get(data, node.right);
      } else {
        return node;
      }
    } else {
      return null;
    }
  }
  
  get(data) {
    if (this.root) {
      return this.#get(data, this.root);
    } else {
      return null;
    }
  };
  
  #remove(root, data) {
    let newRoot, exchange, temp;
    if (!root) return false;
    if (data < root.data) {
      root.left = this.#remove(root.left, data);
    } else if (data > root.data) {
      root.right = this.#remove(root.right, data);
    } else {
      if (!root.left) {
        newRoot = root.right;
        // root 메모리 정리
        return newRoot;
      } else if (!root.right) {
        newRoot = root.left;
        // root 메모리 정리
        return newRoot;
      } else {
        exchange = root.left;
        while (exchange.right) exchange = exchange.right;
        temp = root.data;
        root.data = exchange.data;
        exchange.data = temp;
        root.left = this.#remove(root.left, exchange.data);
      }
    }
    return root;
  }
  
  remove(key) {
    const node = this.#remove(this.root, key);
    if (node) {
      this.root = node;
      this.count--;
      if (this.count == 0) this.root = null;
    }
    return true;
  };
}

const tree = new Tree();
tree.add(5); // 1
tree.add(3); // 2
tree.add(4); // 3
tree.add(2); // 4
tree.add(7); // 5
tree.add(6); // 6
tree.root.left.data; // 3
tree.root.left.left.data; // 2
tree.root.left.right.data; // 4
tree;
tree.remove(3);
tree.root.left.data; // 2
