export class Queue {
  arr = []; // 연결리스트로 만들기(숙제)

  enqueue(value) {
    //push
    return this.arr.push(value);
  }

  dequeue() {
    //pop
    return this.arr.shift();
  }

  peek() {
    //first
    return this.arr[0]; // = this.at(0)
  }

  get length() {
    return this.arr.length;
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(3);
// queue.enqueue(5);
// queue.enqueue(2);
// queue.enqueue(4); // 5
// console.log(queue.length); // 5
// queue.dequeue(); // 1
// console.log(queue.peek()); // 3;

//////////////////////////////////////////////////
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return null; // 큐가 비어있을 경우
    }
    const removedData = this.front.data;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null; // 큐가 비어있을 경우 rear도 초기화
    }
    this.size--;
    return removedData;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.front ? this.front.data : null;
  }

  getSize() {
    return this.size;
  }
}

// 큐 테스트
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('큐 크기:', queue.getSize()); // 출력: 3
console.log('Front 항목:', queue.peek()); // 출력: 1

const removedItem = queue.dequeue();
console.log('Dequeue한 항목:', removedItem); // 출력: 1
console.log('큐 크기:', queue.getSize()); // 출력: 2
