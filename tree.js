class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MyTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        //left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  // puede tener un largo de 2 a la N (cantidad de elementos que se agregaron)
  /**
   *
   * @param {number} value
   */
  search(value) {
    let currentNode = this.root;
    let anotherBranch = true;
    if (this.root.value === value) return this.root;
    while (anotherBranch) {
      // cut while if doesnt exist another branch with less o plus value.
      if (
        (value < currentNode.value && !currentNode.left) ||
        (value > currentNode.value && !currentNode.right)
      ) {
        anotherBranch = false;
      }
      // left
      if (value < currentNode.value && currentNode.left) {
        const left = currentNode.left;
        if (left.value === value) return left;
        currentNode = currentNode.left;
      } else if (value > currentNode.value && currentNode.right) {
        const right = currentNode.right;
        if (right.value === value) return right;
        currentNode = currentNode.right;
      }
      //cut while
      if (currentNode.left === null && currentNode.right === null)
        anotherBranch = false;
    }
    throw new Error("No se encontro el valor");
  }
}

const t = new MyTree();
