export class Stack {
  // 클래스를 만들어서 다른 함수는 사용하지 못하도록 함
  arr = []; // 사기같으면 연결리스트를 사용하면 됨

  push(value) {
    //length 반환
    return this.arr.push(value);
  }

  pop() {
    return this.arr.pop(); // 마지막 요소(pop된 요소) 반환
  }

  top() {
    return this.arr.at(-1); // this.length-1
  }

  get length() {
    return this.arr.length;
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(3);
// stack.push(5);
// stack.push(2);
// stack.push(4); // 5
// console.log(stack.length); // 5
// stack.pop(); // 4
// console.log(stack.top()); // 2;

///////////////////////////////////////////

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.top) {
      return null; // 스택이 비어있을 경우
    }
    const poppedData = this.top.data;
    this.top = this.top.next;
    this.size--;
    return poppedData;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.top ? this.top.data : null;
  }

  getSize() {
    return this.size;
  }
}

// 스택 테스트
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log('스택 크기:', stack.getSize()); // 출력: 3
console.log('Top 항목:', stack.peek()); // 출력: 3

const poppedItem = stack.pop();
console.log('팝한 항목:', poppedItem); // 출력: 3
console.log('스택 크기:', stack.getSize()); // 출력: 2
