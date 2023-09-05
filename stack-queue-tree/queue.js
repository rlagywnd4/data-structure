export class Queue {
    arr = []; // 연결리스트로 만들기(숙제)

    enqueue(value) { //push
        return this.arr.push(value);
    }

    dequeue() { //pop
        return this.arr.shift();
    }

    peek() {//first
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