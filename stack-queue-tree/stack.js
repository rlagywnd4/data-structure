export class Stack { // 클래스를 만들어서 다른 함수는 사용하지 못하도록 함
    arr = [];

    push(value) { //length 반환
        return this.arr.push(value);
    }

    pop() { 
        return this.arr.pop(); // 마지막 요소(pop된 요소) 반환
    }

    top() {
        return this.arr.at(-1);
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