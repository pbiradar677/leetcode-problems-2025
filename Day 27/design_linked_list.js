// 707. Design Linked List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

// Constraints:

// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

class LinkedNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class MyLinkedList {
  #head = null;
  #size = 0;
  #createNode(val, next = null) {
    return new LinkedNode(val, next);
  }
  get(index) {
    if (index < 0 || index >= this.#size) return -1;
    let curr = this.#head;
    let count = 0;
    while (curr) {
      if (count === index) {
        return curr.val;
      }
      count++;
      curr = curr.next;
    }
    return -1;
  }
  indexOf(val) {
    let curr = this.#head;
    let count = 0;
    while (curr) {
      if (curr.val === val) {
        return count;
      }
      count++;
      curr = curr.next;
    }
    return -1;
  }
  addAtHead(val) {
    this.#head = this.#createNode(val, this.#head);
    this.#size++;
  }
  addAtTail(val) {
    if (!this.#head) {
      this.#head = this.#createNode(val);
      this.#size++;
      return;
    }
    let curr = this.#head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = this.#createNode(val);
    this.#size++;
  }
  addAtIndex(index, val) {
    if (index < 0 || index > this.#size) return;

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let prev = this.#head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    prev.next = this.#createNode(val, prev.next);
    this.#size++;
  }
  addBeforeValue(ele, val) {
    if (!this.#head) return;
    if (this.#head.val === val) {
      this.#head = this.#createNode(ele, this.#head);
      this.#size++;
      return;
    }
    let curr = this.#head;

    while (curr.next) {
      if (curr.next.val === val) {
        curr.next = this.#createNode(ele, curr.next);
        this.#size++;
        break;
      }
      curr = curr.next;
    }
  }
  deleteHead() {
    if (!this.#head) return;
    this.#head = this.#head.next;
    this.#size--;
  }
  deleteTail() {
    if (!this.#head) return;
    if (!this.#head.next) {
      this.#head = null;
      this.#size--;
      return;
    }
    let curr = this.#head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
    this.#size--;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.#size) return;

    if (index === 0) {
      this.#head = this.#head.next;
      this.#size--;
      return;
    }
    let curr = this.#head;
    let count = 0;
    while (curr && curr.next) {
      if (count === index - 1) {
        curr.next = curr.next.next;
        this.#size--;
        return;
      }
      count++;
      curr = curr.next;
    }
  }
  removeByValue(val) {
    if (!this.#head) return;
    if (this.#head.val === val) {
      this.#head = this.#head.next;
      this.#size--;
      return;
    }
    let curr = this.#head;
    let prev = null;
    while (curr) {
      if (curr.val === val) {
        prev.next = curr.next;
        this.#size--;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }
  print() {
    let curr = this.#head;
    let res = [];
    while (curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    console.log("linked list: ", res.join("->"));
  }
  isEmpty() {
    return this.#size === 0;
  }
  clear() {
    this.#head = null;
    this.#size = 0;
  }
  get size() {
    return this.#size;
  }

  reverse() {
    let prev = null;
    let curr = this.#head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.#head = prev;
  }
  toArray() {
    const res = [];
    let curr = this.#head;
    while (curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    return res;
  }
  findMiddle() {
    if (!this.#head) return null;
    let fast = this.#head;
    let slow = this.#head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  hasCycle() {
    if (!this.#head) return false;
    let fast = this.#head;
    let slow = this.#head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) return true;
    }
    return false;
  }
  has(val) {
    let curr = this.#head;
    while (curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }
}

// Your MyLinkedList object will be instantiated and called as such:
// var obj = new MyLinkedList();
// var param_1 = obj.get(index);
// obj.addAtHead(val);
// obj.addAtTail(val);
// obj.addAtIndex(index, val);
// obj.deleteAtIndex(index);

// Explanation
const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
console.log(myLinkedList.removeByValue(3));

myLinkedList.addAtIndex(1, 2);
myLinkedList.print(); // linked list becomes 1->2->3
console.log(myLinkedList.get(1)); // return 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
console.log(myLinkedList.get(1)); // return 3
myLinkedList.addBeforeValue(2, 3);
myLinkedList.addBeforeValue(4, 3);
myLinkedList.addBeforeValue(0, 1); //0->1->2->4->3
myLinkedList.deleteHead(); // delete 0
myLinkedList.deleteTail();
myLinkedList.deleteAtIndex(0);
myLinkedList.print(); // linked list becomes  0->1->2->4->3
console.log(myLinkedList.size);
console.log(myLinkedList.reverse());
myLinkedList.print();
console.log(myLinkedList.indexOf(3)); // return 4
