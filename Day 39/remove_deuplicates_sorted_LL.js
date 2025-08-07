// 82. Remove Duplicates from Sorted List II

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.
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

var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;

  const dummy = new ListNode(0, head);
  let prev = dummy;
  let current = head;

  while (current) {
    let isDuplicate = false;

    while (current.next && current.val === current.next.val) {
      isDuplicate = true;
      current = current.next;
    }

    if (isDuplicate) {
      prev.next = current.next;
    } else {
      prev = prev.next;
    }

    current = current.next;
  }

  return dummy.next;
};
