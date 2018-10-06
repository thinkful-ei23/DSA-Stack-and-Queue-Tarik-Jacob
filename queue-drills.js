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
}

function peek(queue) {
  console.log(queue.first.value);
}

function displayQueue(queue) {
  let tempNode = queue.first;
  let queueString = 'Start';
  while(tempNode !== null) {
    queueString += ` <== ${tempNode.value} ==> `
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

main();