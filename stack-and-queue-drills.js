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
  // displayStack(starTrek);
  // remove(starTrek, 'McCoy');
  // console.log(is_palindrome('rac ecar'));
  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));
  // console.log(findOpenParen('((1+2)+3)'));
  // console.log(findOpenParen('((1+2)+3'));
  // console.log(findOpenParen('(1+2)+3)'));
  // console.log(findOpenParen('( () () () ( () () () ()'));
  // console.log(findOpenParen('()()())(()()()'));
  const sortMe = new Stack();
  sortMe.push(3);
  sortMe.push(4);
  sortMe.push(1);
  sortMe.push(5);
  displayStack(sortMe);
  sortStack(sortMe);
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

// (1-2)
// )1-2
// ((1+2)+3)
// ((1+2)+3
// (1+2)+3)
// (()()()(()()()()
// ()()())(()()()
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
// store variable smallest value === stack.top
// store largest num
// input STACK: 9451186
// output: 9 5 4 

// input: d i y c
// output: y i d c 

// STACK 1    STACK 2
// 459
// i              y
// 954

function sortStack(stack, stack2 = new Stack(), smallestNum = stack.top.data, largestNum = null) {
  if (stack2.top) {
    if (stack2.top.data === smallestNum) {
      displayStack(stack2);
      return stack2;
    }
  }
  // 3 4 1 5
  let largest = 0;
  let tempNode = stack.top;

  while (tempNode !== null) {
    if (tempNode.data > largest && tempNode.data !== largestNum) {
      largest = tempNode.data;
    }
    if (tempNode.data < smallestNum) {
      smallestNum = tempNode.data;
    }
    tempNode = tempNode.next;
  }

  stack2.push(largest);
  largestNum = largest;
  
  return sortStack(stack, stack2, smallestNum, largestNum);
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
