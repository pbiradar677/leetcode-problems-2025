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
  constructor() {
    this.head = null;
  }
  get(index) {
    let curr = this.head;
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
  addAtHead(val) {
    const newNode = new LinkedNode(val, this.head);
    this.head = newNode;
  }
  addAtTail(val) {
    if (!this.head) {
      this.addAtHead(val);
    } else {
      let curr = this.head;
      while (curr && curr.next) {
        curr = curr.next;
      }
      const newNode = new LinkedNode(val);
      curr.next = newNode;
    }
  }
  addAtIndex(index, val) {
    if (index === 0) {
      const newNode = new LinkedNode(val, this.head);
      this.head = newNode;
    } else {
      let count = 0;
      let curr = this.head;
      while (curr) {
        if (count === index - 1) {
          const newNode = new LinkedNode(val, curr.next);
          curr.next = newNode;
          break;
        }
        count++;
        curr = curr.next;
      }
    }
  }
  deleteAtIndex(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
    }
    let curr = this.head;
    let count = 0;
    while (curr && curr.next) {
      if (count === index - 1) {
        curr.next = curr.next.next;
        break;
      }
      count++;
      curr = curr.next;
    }
  }
  print() {
    let curr = this.head;
    let res = [];
    while (curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    console.log("linked list: ", res.join("->"));
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
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
myLinkedList.print(); // linked list becomes 1->2->3
console.log(myLinkedList.get(1)); // return 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
console.log(myLinkedList.get(1)); // return 3
