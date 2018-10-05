'use strict';

const Stack = require('./stack');

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  peek(starTrek);
  displayStack(starTrek);
  remove(starTrek, 'McCoy');
}

function peek(stack) {
  console.log(stack.top.data);
}

function displayStack(stack) {
  let tempNode = stack.top;
  let stackString = '';
  while(tempNode !== null) {
    stackString += `${tempNode.data} --> `
    tempNode = tempNode.next;
  }
  console.log(stackString);
}

function remove(stack, data) {
  let tempNode = stack.top;
  while (tempNode.data !== data) {
    stack.pop();
    tempNode = stack.top;
  }
  const removed = stack.pop();
  console.log(removed);
  return removed;
}

// Kirk is the first item in our stack

main();