'use strict';

const Queue = require('./queue');

function main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  displayQueue(starTrekQ);

  peek(starTrekQ);
  remove(starTrekQ, 'Spock');
  let danceList = new Queue();
  danceList.enqueue('F Jane');
  danceList.enqueue('M Frank');
  danceList.enqueue('M John');
  danceList.enqueue('M Sherlock');
  danceList.enqueue('F Madonna');
  danceList.enqueue('M David');
  danceList.enqueue('M Christopher');
  danceList.enqueue('F Beyonce');
  SquareDanceParing(danceList);
}

function peek(queue) {
  console.log(queue.first.value);
}

function displayQueue(queue) {
  let tempNode = queue.first;
  let queueString = 'Start';
  while(tempNode !== null) {
    queueString += ` <== ${tempNode.value} ==> `;
    tempNode = tempNode.prev;
  }
  console.log(queueString);
}
function remove(queue, value) {
  // iterate through the queue until tempNode.value === value
  let tempNode = queue.first;
  while (tempNode.value !== value) {
    tempNode = tempNode.prev;
    queue.dequeue();
  }
  const removed = queue.dequeue();
  console.log(removed);
  return removed;
}



function SquareDanceParing(queue) {
  const maleQueue = new Queue();
  const femaleQueue = new Queue();
  let tempDancer;
  let maleQueueLength = 0;
  let femaleQueueLength = 0;
  while (queue.first) {
    tempDancer = queue.dequeue();
    if (tempDancer[0] === 'M') {
      maleQueue.enqueue(tempDancer);
      maleQueueLength++;
      console.log('male ', maleQueueLength, tempDancer);
    } 
    if (tempDancer[0] === 'F') {
      femaleQueue.enqueue(tempDancer);
      femaleQueueLength++;
      console.log('female ', femaleQueueLength, tempDancer);
    }
  }
  console.log(maleQueueLength, '<--thats male', femaleQueueLength);
  while (maleQueue.first && femaleQueue.first) {
    maleQueueLength--, femaleQueueLength--;
    console.log(`Female dancer is: ${femaleQueue.dequeue()} and the male dancer is: ${maleQueue.dequeue()}`);
  }
  if (maleQueueLength > 0) {
    console.log(`There are ${maleQueueLength} male dancers waiting.`);
  } else {
    console.log(`There are ${femaleQueueLength} female dancers waiting.`);
  }
}
main();