// 155. Min Stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.

var MinStack = function () {
  this.s = [];
  this.minEle = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!this.s.length) {
    this.s.push(val);
    this.minEle = val;
  } else if (val < this.minEle) {
    this.s.push(2 * val - this.minEle);
    this.minEle = val;
  } else {
    this.s.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let t = this.s.pop();
  if (t < this.minEle) {
    this.minEle = 2 * this.minEle - t;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let t = this.s[this.s.length - 1];
  return t < this.minEle ? this.minEle : t;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minEle;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Time Complexity: O(1)
// Space Complexity: O(1)
