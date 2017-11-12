// LinkedList factory function
function LinkedList() {
  // Instantiating head and tail nodes
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  // Set next to this.head
  var newNode = new Node(value, this.head, null);

  // If an older head node exists
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode; // If no older head, point tail to itself

  // Point head to this new node
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);

  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;

  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;

  var val = this.head.value; // Store value
  this.head = this.head.next; // Set new head as the next head

  if (this.head)
    this.head.prev = null; // Set new head's prev to null
  else this.tail = null; // If no head/list is empty, set tail to null

  return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;

  var val = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) this.tail.next = null;
  else this.head = null;

  return val;
};

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;

  if (currentNode.value === searchValue) return currentNode.value;

  while (currentNode.next) {
    currentNode = currentNode.next;
    if (currentNode.value === searchValue) return currentNode.value;
  }

  return null;
};

LinkedList.prototype.indexOf = function(value) {
  var currentIndex = 0;
  var indexList = [];

  var currentNode = this.head;
  if (currentNode.value === value) indexList.push(currentIndex);

  while (currentNode.next) {
    currentNode = currentNode.next;
    currentIndex++;
    if (currentNode.value === value) indexList.push(currentIndex);
  }

  return indexList;
};

var ll = new LinkedList();

ll.addToTail(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(1);
ll.addToTail(2);
ll.addToTail(3);
