class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);
        if(this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode; //여기서 this는 queue? Node? js에선 함수도 객체지 않나
            this.tail = newNode; //next만 하면 되는거 아닌감
        }
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek() {
        return this.head.value; //peek하는이유
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    for (let i = 0; i < priorities.length; i += 1) {
        queue.enqueue([priorities[i], i]); //왜 arr로? Node에서 어떻게 출력?
    }

    priorities.sort((a, b) => b-a); //정렬하면 어그러지지 않나

    let count = 0;
    while(true) {
        const currentValue = queue.peek();
        if (currentValue[0] < priorities[count]) {
            queue.enqueue(queue.dequeue());
        } else { 
            const value = queue.dequeue();
            count += 1;
            if (location === value[1]) { 
                return count;
            }
        }
    }
}