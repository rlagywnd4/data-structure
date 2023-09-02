class LinkedList {
  length = 0;
  head = null; // 처음

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length;
  }
  search(index) {
    return this.#search(index)[1]?.value;
  }
  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일 때
      this.head = current.next;
      this.length--;
      return this.length;
    }
    // 삭제하고자 하는 대상이 없을때
    // 아무것도 안해도 됨
  }
  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }
}

class Node {
  next = null;
  constructor(value) {
    // 외부에서 받을 값은 constructor을 사용함
    this.value = value;
  }
}

const ll = new LinkedList();

ll.length;
ll.add(1);
ll.add(2);
ll.add(3);
console.log(ll);
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);

console.log(ll.search(3));
console.log(ll.remove(4));
console.log(ll);
for (let i = 0; i < ll.length; i++) {
  console.log(ll.search(i));
}
