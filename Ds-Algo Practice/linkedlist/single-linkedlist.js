class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head && !this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.length && !this.head) return 'No items are present for pop.';

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        let previousNode = this.head;
        let currentNode = this.head.next;
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        this.tail = previousNode;
        this.length--;
    }

    shift() {
        if (!this.head && !this.length) return 'no items are present for shifting.';

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        const newHead = this.head.next;
        this.head.next = null;
        this.head = newHead;
        this.length--;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head && !this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    get(index) {
        if (index < 0) return undefined;
        if (index === 0) return this.head;

        let nodeToBeReturned = null;
        while (index) {
            nodeToBeReturned = nodeToBeReturned.next;
            index--;
        }

        return nodeToBeReturned;
    }

    set(val, index) {
        let node = this.get(index);
        node.val = val;
    }

    insert(val, index) {

    }

    delete(index) {
        if(!this.head || !this.length || index < 0) return undefined;
        if(index === 0) {
            this.shift();
        }

        if(index === this.length - 1) {
            this.pop();
        }

        let i = index;
        let previousNode = null;
        let nodeToBeDeleted = this.head;
        while(i) {
            const temp = nodeToBeDeleted.next;
            previousNode = nodeToBeDeleted;
            nodeToBeDeleted = temp;
            i--;
        }

        const nextNode = nodeToBeDeleted.next;
        nodeToBeDeleted.next = null;
        previousNode.next = nextNode;
        this.length--;
    }

    // reverse() {
    //     if(!this.head || !this.length) return 'linkedlist is empty.';
        
    //     let node = this.head;
    //     let nodesArr = [];
    //     while (node) {
    //         nodesArr.push(node);
    //         node = node.next;
    //     }
    //     for (let i = nodesArr.length - 1; i >= 0; i--) {
    //         if (i === nodesArr.length - 1) {
    //             this.head = nodesArr[i];
    //             this.head.next = nodesArr[i - 1];
    //         }
    //         else if (i === 0) {
    //             this.tail = nodesArr[i];
    //             this.tail.next = null;
    //         } 
    //         else {
    //             nodesArr[i].next = nodesArr[i-1];
    //         }
    //     }

    //     return this;
    // }

    reverse() {
        let currentNode = this.head;
        let previousNode = null;
        let nextNode;

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            const val = currentNode.val;
            console.log('val', val);
            currentNode = currentNode.next;
        }
    }
}

const list1 = new SinglyLinkedList();
list1.push('1');
list1.push('2');
list1.push('3');
list1.push('4');
list1.push('5');
list1.push('6');
// list1.traverse();
// list1.pop();
// list1.traverse();
// list1.shift();
// list1.shift();
// list1.traverse();
// const node = list1.get(1);
// console.log('node from get', node);
list1.traverse();
list1.delete(4)
list1.delete(2)
list1.traverse();
