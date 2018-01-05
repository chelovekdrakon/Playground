import Node from './Node';

export default class LList {
    constructor() {
        this.head = new Node();
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    findPrevious(item) {
        let currNode = this.head;
        while ( currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(item) {
        let previousNode = this.findPrevious(item);

        if (previousNode !== null) {
            previousNode.next = previousNode.next.next;
        }
    }

    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);

        newNode.next = current.next;
        current.next = newNode;
    }

    display() {
        let currNode = this.head;
        while(currNode.next !== null) {
            window.console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}
