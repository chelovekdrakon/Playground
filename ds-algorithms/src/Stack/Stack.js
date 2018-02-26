export default class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.top > 0 ? this.dataStore[--this.top] : 'stack is empty';
    }

    peek() {
        return this.top > 0 ? this.dataStore[this.top - 1] : 'stack is empty';
    }

    length() {
        return this.top;
    }

    clear() {
        this.top = 0;
    }

}
