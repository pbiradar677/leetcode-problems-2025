// 61. Rotate List

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// Brute force solution
// var rotateRight = function (head, k) {
//   if (!head || !head.next) return head;
//   let length = 0;
//   let curr = head;
//   while (curr) {
//     curr = curr.next;
//     length++;
//   }
//   let pos = k % length;
// if (pos === 0) return head;
//   while (pos) {
//     let curr = head;
//     while (curr.next && curr.next.next) {
//       curr = curr.next;
//     }

//     let newHead = curr.next;
//     curr.next = null;
//     newHead.next = head;
//     head = newHead;
//     pos--;
//   }
//   return head;
// };
// Optimized solution
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let length = 1;
  let dummy = head;
  while (dummy.next) {
    dummy = dummy.next;
    length++;
  }
  let pos = k % length;
  if (pos === 0) return head;

  let curr = head;
  for (let i = 0; i < length - pos - 1; i++) {
    curr = curr.next;
  }

  let newHead = curr.next;
  curr.next = null;
  dummy.next = head;
  return newHead;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
