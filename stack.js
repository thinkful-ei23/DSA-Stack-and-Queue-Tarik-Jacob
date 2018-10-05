'use strict';

// creates a node containing the data and reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    // check if stack is empty (this.top === null;) new _Node set to this.top;
    if (!this.top) {
      this.top = new _Node(data, null);
      return this.top;
    }
    // if not empty... create new Node
    // point new node this.next to current this.top
    // then change this.top to = new Node
    const node =  new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    // if not empty... set this.top = to variable, set this.top = node.next, return node.data
    const node = this.top;
    this.top = node.next;
    return node.data;
  } 
}

module.exports = Stack;