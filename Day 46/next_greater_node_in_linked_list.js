// 1019. Next Greater Node In Linked List

// You are given the head of a linked list with n nodes.

// For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.

// Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.

// Example 1:

// Input: head = [2,1,5]
// Output: [5,5,0]
// Example 2:

// Input: head = [2,7,4,3,5]
// Output: [7,0,5,5,0]

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 104
// 1 <= Node.val <= 109
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// Brute force approach
// const nextLargerNodes = function (head) {
//   let res = [];
//   let curr = head;
//   while (curr) {
//     let temp = curr;
//     while (temp) {
//       if (curr.val < temp.val) {
//         res.push(temp.val);
//         break;
//       }
//       temp = temp.next;
//     }
//     if (!temp) {
//       res.push(0);
//     }
//     curr = curr.next;
//   }

//   return res;
// };
// Time Complexity: O(n^2)
// Space Complexity: O(n)

// Optimal solution using array and  monotonic decreasing stack
const nextLargerNodes = function (head) {
  let values = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  let result = new Array(values.length).fill(0);
  let stack = [];

  for (let i = 0; i < values.length; i++) {
    while (stack.length && values[i] > values[stack[stack.length - 1]]) {
      let idx = stack.pop();
      result[idx] = values[i];
    }
    stack.push(i);
  }

  return result;
};
// Input:
const head = [2, 7, 4, 3, 5];
console.log(nextLargerNodes(head));
// Output: [7,0,5,5,0]
// Time Complexity: O(n)
// Space Complexity: O(n)
