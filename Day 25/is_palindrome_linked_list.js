// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  let firstHalf = head;
  let secondHalfReversed = prev;
  while (secondHalfReversed) {
    if (firstHalf.val !== secondHalfReversed.val) return false;
    firstHalf = firstHalf.next;
    secondHalfReversed = secondHalfReversed.next;
  }
  return true;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
