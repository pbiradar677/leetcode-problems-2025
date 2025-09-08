class DLLNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
class DoublyLinkedList {
  head = null;
  tail = null;
  dllLength = 0;

  convertArrayToDLL(arr) {
    if (arr.length === 0) return null;
    this.head = new DLLNode(arr[0]);
    let prev = this.head;
    this.dllLength++;
    this.tail = this.head;
    for (let i = 1; i < arr.length; i++) {
      const newNode = new DLLNode(arr[i], null, prev);
      prev.next = newNode;
      prev = newNode;
      this.dllLength++;
    }
    this.tail = prev;
    return this.head;
  }
  printDLL(head) {
    let current = head;
    const values = [];
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    console.log(values.join(" <-> "));
  }
  printDLLReverse(tail) {
    let current = tail;
    const values = [];
    while (current) {
      values.push(current.val);
      current = current.prev;
    }
    console.log(values.join(" <-> "));
  }
}

const arr = [1, 2, 3, 4, 5];

const dll = new DoublyLinkedList();
const head = dll.convertArrayToDLL(arr);
dll.printDLL(head);
dll.printDLLReverse(dll.tail);
console.log("Length of DLL:", dll.dllLength);
