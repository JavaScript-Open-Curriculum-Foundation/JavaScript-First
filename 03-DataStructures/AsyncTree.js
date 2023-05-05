class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    async insert(value) {
      const newNode = new TreeNode(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        await this._insertNode(this.root, newNode);
      }
    }
  
    async _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          await this._insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          await this._insertNode(node.right, newNode);
        }
      }
    }
  
    // Other tree operations (search, remove, etc.) can be added here
  }
  
  // Example usage:
  (async () => {
    const bst = new BinarySearchTree();
  
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
  
    for (const value of data.values) {
      await bst.insert(value);
    }
  })();
  
