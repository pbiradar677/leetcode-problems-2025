// 328. Odd Even Linked List

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

// Constraints:

// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time Complexity: O(n)
// Space Complexity: O(1)
// Brute Force Approach
// var oddEvenList = function (head) {
//   if (head === null || head.next === null) return head;
//   let curr = head;
//   let odd = new ListNode(-1, null);
//   let tempOdd = odd;
//   let even = new ListNode(-1, null);
//   let tempEven = even;
//   let i = 1;
//   while (curr) {
//     if (i % 2 === 1) {
//       tempOdd.next = curr;
//       tempOdd = tempOdd.next;
//     } else {
//       tempEven.next = curr;
//       tempEven = tempEven.next;
//     }
//     i++;
//     curr = curr.next;
//   }
//   tempEven.next = null;
//   tempOdd.next = even.next;

//   return odd.next;
// };
// Optimized Approach
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
};

const arr = [1, 2, 3, 4, 5];
function createLinkedList(arr) {
  if (!arr.length) return null;
  let dummy = new ListNode(-1, null);
  let curr = dummy;
  for (const val of arr) {
    curr.next = new ListNode(val, null);
    curr = curr.next;
  }
  return dummy.next;
}
let head = createLinkedList(arr);
console.log(oddEvenList(head));
