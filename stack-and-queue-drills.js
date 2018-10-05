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
  console.log(findOpenParen('((1+2)+3)'));
  console.log(findOpenParen('((1+2)+3'));
  console.log(findOpenParen('(1+2)+3)'));
  console.log(findOpenParen('( () () () ( () () () ()'));
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


// input: ((1+2)+3)
// output: null

// input2: ((1+2)+3
// output2: 0

// input3: (1+2)+3)
// output3: 7

// input4: ([{}])
// output4: null

// input5: ([{}]
// output5: 0

// input6: ([{})
// output6: 1

// input7: ([)], [(]), {(}), 
// output7: 2

function findOpenParen(exp) {
  const expLength = exp.length;
  let open = 0;
  let count = 0;
  let expStack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') {
      open++;
    }
    if (exp[i] === ')') {
      open--;
    }
    expStack.push(exp[i]);
  }

  if (open === 0) {
    return null;
  }
  let poppedItem;

  while (open !== 0) {
    poppedItem = expStack.pop();
    if (poppedItem === '(') {
      open--;
    }
    if (poppedItem === ')') {
      open++;
    }
    count++;
  }
  const position = expLength - count;
  return `Parenthetical error at ${position}`;
}

main();
