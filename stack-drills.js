'use strict';

const Stack = require('./stack');

function main() {
  const starTrek = new Stack();
  
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // peek(starTrek);
  let tempNode = starTrek.top;
  console.log(tempNode.next.data);
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
  console.log(findOpenParen('()()())(()()()'));
  const sortMe = new Stack();
  sortMe.push(3);
  sortMe.push(4);
  sortMe.push(1);
  sortMe.push(5);
  displayStack(sortMe);
  sortStack(sortMe);
  console.log(JSON.stringify(sortMe));
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

function findOpenParen(exp) {
  let expStack = new Stack();
  let error;
  for (let i=0; i < exp.length; i++) {
    if (exp[i] === "(") {
      expStack.push(i);
    } else if (exp[i] === ')') {
      if (expStack.top === null) {
        error = `Parenthetical error at ${i}`;
        break;
      } else {
        expStack.pop();
      }
    }
  } if (expStack.top) {
    error = `Parenthetical error at ${expStack.top.data}`;
  }
  return error;
}


function sortStack(stack) {
  let tempStack = new Stack();
  while (stack.top) {
    let temp = stack.pop();
    while (tempStack.top && tempStack.top.data < temp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  displayStack(tempStack);
  return tempStack;
}


main();

// 3, 5, 1, 4, 2, 8
//rd1: I: 35142 temp: 8 tempStack:
//rd2: I: 35142 temp: tempStack: 8
//rd3: I: 3514 temp: 2 tempStack: 8
//rd4: I: 35148 temp: 2 tempStack:
//rd5: I: 35148 temp: tempStack: 2
//rd6: I: 3514 temp: 8 tempStack: 2
//rd7: I: 3514 temp: tempStack: 2,8
//rd8: I: 351 temp: 4 tempStack: 2,8
//rd9: I: 3518 temp: 4 tempStack: 2
//rd10: I: 3518 temp: tempStack: 2,4
//rd11: I: 351 temp: 8 tempStack: 2,4
//rd12: I: 351 temp: tempStack: 2,4,8
//rd12: I: 35 temp: 1 tempStack: 2,4,8
//rd13: I: 358 temp: 1 tempStack: 2,4
//rd14: I: 3584 temp: 1 tempStack: 2,
//rd15: I: 35842 temp: tempStack: 1
//rd16: I: 3584 temp:  tempStack: 1,2
//rd17: I: 358 temp: 4 tempStack: 1,2
//rd18: I: 35 temp: 8 tempStack: 1,2,4
//rd19: I: 3 temp: 5 tempStack: 1,2,4,8
//rd20: I: 3 temp:8 tempStack: 1,2,4,5
//rd21: I: 3 temp: tempStack: 1,2,4,5,8
//rd22: I: 8 temp: 3 tempStack: 1,2,4,5
//rd23: I: 85 temp: 3 tempStack: 1,2,4
