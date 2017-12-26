export default class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        return this.dataStore.toString();
    }

    empty() {
        return this.dataStore.length === 0 ? true : false;
    }

    length() {
        return this.dataStore.length;
    }

}
