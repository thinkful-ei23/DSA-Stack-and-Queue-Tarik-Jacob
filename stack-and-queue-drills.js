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
  console.log(is_palindrome('rac ecar'));
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
  console.log(is_palindrome("1001"));
  console.log(is_palindrome("Tauhida"));
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
function is_palindrome(s) {
  const wordStack = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < s.length; i++) {
    wordStack.push(s[i]);
  }
  let reverse = '';
  while (wordStack.top !== null) {
    reverse += wordStack.pop();
  }
  if (s === reverse) {
    return true;
  }
  return false;
}




main();