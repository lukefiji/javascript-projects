function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value); // If left node exists, recursively go down the tree
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

// In-Order Traversal - from least to greatest
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'preOrder') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'inOrder') iteratorFunc(this.value);
  if (this.left) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'postOrder') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = []; // First-in, first-out
};

var bst = new BST(50);

bst.insert(30);
bst.insert(20);
bst.insert(60);
bst.insert(35);

bst.depthFirstTraversal(log, 'postOrder');

function log(value) {
  console.log(value);
}

console.log(bst.contains(35));
console.log(JSON.stringify(bst));
