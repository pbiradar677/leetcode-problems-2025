class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // Add a new node to the end
  append(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  // Add a node to the beginning
  prepend(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let current = this.head;

    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      this.length--;
    }
  }
  // Print all node values
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += null;
    console.log(result);
  }
  // Check if list is empty
  isEmpty() {
    return this.length === 0;
  }
  // Get size of the list
  size() {
    return this.length;
  }
  reverseList() {
    // if (!head || !head.next) {
    //     return head;
    // }
    // let newHead = reverseList(head.next)
    // head.next.next = head
    // head.next = null
    // return newHead
    let node = null;
    while (this.head) {
      const temp = this.head.next;
      this.head.next = node;
      node = this.head;
      this.head = temp;
    }
    return node;
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);
console.log(list.size());
list.print(); // Output: 5 -> 10 -> 20 -> null
console.log(list.reverseList());

// list.delete(10);
// console.log(list.size());
// list.print(); // Output: 5 -> 20 -> null
// list.delete(5);
// list.delete(20);
// console.log(list.size());
// list.print();
// console.log(list.isEmpty());
